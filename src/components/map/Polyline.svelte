<script>
  import { getContext, onDestroy, setContext } from 'svelte'
  import { mapKey, targetKey } from './Map.svelte'
  import { decodePath } from '../../utils/map'

  const { getMap } = getContext(mapKey)

  const map = getMap()

  export let path
  export let isActive

  $: polyline.setOptions({ strokeColor: isActive ? '#0000FF' : '#FF0000' })

  const polyline = new google.maps.Polyline({
    path: decodePath(path),
    geodesic: true,
    map,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })

  polyline.toRemoveKeys = {}
  polyline.registerRemoveKey = (id, obj) => (polyline.toRemoveKeys[id] = obj)
  polyline.deregisterRemoveKey = id => {
    delete polyline.toRemoveKeys[id]
  }

  setContext(targetKey, {
    getTarget: () => polyline,
  })

  onDestroy(() => polyline.setMap(null))
</script>

<slot />
