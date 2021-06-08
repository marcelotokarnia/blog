<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'
  import { markerKey } from './Marker.svelte'
  import { v4 as uuid } from 'uuid'
  import { decodePath } from '../../utils/map'

  export let paths
  export let autoRemove
  const id = uuid()

  const { getMap } = getContext(mapKey)
  const map = getMap()
  const { getMarker } = getContext(markerKey)
  const marker = getMarker()

  console.log(decodePath(paths))

  const polygon = new google.maps.Polygon({
    paths: decodePath(paths),
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  })

  if (marker) {
    const eventListener = marker.addListener('click', () => {
      if (autoRemove) {
        marker.registerRemoveKey(id, polygon)
      }
      polygon.setMap(map)
    })

    onDestroy(() => {
      polygon.setMap(null)
      google.maps.event.removeListener(eventListener)
    })
  } else {
    polygon.setMap(map)

    onDestroy(() => {
      polygon.setMap(null)
    })
  }
</script>
