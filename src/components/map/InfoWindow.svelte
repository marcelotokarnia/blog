<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey, targetKey, TARGET_TYPES } from './Map.svelte'
  import { v4 as uuid } from 'uuid'
  import { POLYLINE_COLORS } from './Polyline.svelte'

  export let component
  export let props

  const id = uuid()

  const randomClass = `uuid-${id.split('-')[0]}`

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getTarget, getTargetType } = getContext(targetKey)
  const target = getTarget()
  const targetType = getTargetType()

  const infoWindow = new google.maps.InfoWindow({
    content: `<info-window class="${randomClass}"></info-window>`,
  })

  let infoWindowComponent

  const closeListener = infoWindow.addListener('closeclick', () => {
    map.deregisterCloseOnClick(id)
    const toRemove = Object.values(target.toRemoveKeys)
    toRemove.forEach(e => e.setMap(null))
    target.toRemoveKeys = {}
    if (targetType === TARGET_TYPES.POLYLINE) {
      target.setOptions({ strokeColor: POLYLINE_COLORS.DEFAULT })
    }
  })

  const eventListener = target.addListener('click', e => {
    map.closeAll()
    if (targetType === TARGET_TYPES.POLYLINE) {
      infoWindow.setPosition(e.latLng)
      infoWindow.open(map)
      target.setOptions({ strokeColor: POLYLINE_COLORS.ACTIVE })
    } else if (targetType === TARGET_TYPES.MARKER) {
      infoWindow.open(map, target)
    }
    map.registerCloseOnClick(id, infoWindow)

    setTimeout(() => {
      infoWindowComponent = new component({
        target: document.querySelector(`info-window.${randomClass}`),
        props,
        hydrate: true,
      })
    }, 50)
  })

  onDestroy(() => {
    infoWindow.close()
    google.maps.event.removeListener(eventListener)
    google.maps.event.removeListener(closeListener)
  })
</script>
