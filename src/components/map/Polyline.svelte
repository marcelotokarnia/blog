<script>
  import { getContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'
  import { decodePath } from '../../utils/map'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let path

  const polyline = new google.maps.Polyline({
    path: decodePath(path),
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })

  polyline.setMap(map)

  onDestroy(() => polyline.setMap(null))
</script>

<slot />
