<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey, targetKey } from './Map.svelte'
  import { v4 as uuid } from 'uuid'

  export let component
  export let props

  const id = uuid()

  const randomClass = `uuid-${id.split('-')[0]}`

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getTarget } = getContext(targetKey)
  const target = getTarget()

  const infoWindow = new google.maps.InfoWindow({
    content: `<info-window class="${randomClass}"></info-window>`,
  })

  let infoWindowComponent

  const closeListener = infoWindow.addListener('closeclick', () => {
    map.deregisterCloseOnClick(id)
    const toRemove = Object.values(target.toRemoveKeys)
    toRemove.forEach(e => e.setMap(null))
    target.toRemoveKeys = {}
  })

  const eventListener = target.addListener('click', e => {
    map.closeAll()
    infoWindow.setPosition(e.latLng)
    infoWindow.open(map)
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
