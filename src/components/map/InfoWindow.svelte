<script context="module">
  export const infowindowkey = {}
</script>

<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'
  import { markerKey } from './Marker.svelte'
  import { v4 as uuid } from 'uuid'

  export let component
  export let props

  const randomClass = `uuid-${uuid().split('-')[0]}`

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getMarker } = getContext(markerKey)
  const marker = getMarker()

  const infoWindow = new google.maps.InfoWindow({
    content: `<info-window class="${randomClass}"></info-window>`,
  })

  let infoWindowComponent

  const eventListener = marker.addListener('click', () => {
    infoWindow.open(map, marker)

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
  })
</script>
