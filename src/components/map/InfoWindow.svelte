<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'
  import { markerKey } from './Marker.svelte'
  import { v4 as uuid } from 'uuid'

  export let component
  export let props

  const id = uuid()

  const randomClass = `uuid-${id.split('-')[0]}`

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getMarker } = getContext(markerKey)
  const marker = getMarker()

  const infoWindow = new google.maps.InfoWindow({
    content: `<info-window class="${randomClass}"></info-window>`,
  })

  let infoWindowComponent

  const closeListener = infoWindow.addListener('closeclick', () => {
    map.deregisterCloseOnClick(id)
    const toRemove = Object.values(marker.toRemoveKeys)
    toRemove.forEach(e => e.setMap(null))
    marker.toRemoveKeys = {}
  })

  const eventListener = marker.addListener('click', () => {
    map.closeAll()
    infoWindow.open(map, marker)
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
