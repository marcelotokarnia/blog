<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'
  import mapbox from '@mapbox/polyline'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let path

  console.log(mapbox)

  const tryDecode = polyline => (polyline ? mapbox.decode(polyline) : [])

  const modifyPolyline = polyline => {
    if (Array.isArray(polyline)) {
      return polyline
    }
    return tryDecode(polyline).map(([lat, lng]) => ({ lat, lng }))
  }

  const polyline = new google.maps.Polyline({
    path: modifyPolyline(path),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })

  polyline.setMap(map)

  onDestroy(() => polyline.setMap(null))
</script>

<slot />
