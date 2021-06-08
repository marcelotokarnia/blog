<script context="module" lang="typescript">
  export enum POLYLINE_COLORS {
    ACTIVE = '#0000FF',
    DEFAULT = '#FF0000',
  }
</script>

<script>
  import { getContext, onDestroy, setContext } from 'svelte'
  import { mapKey, targetKey, TARGET_TYPES } from './Map.svelte'
  import { decodePath } from '../../utils/map'

  const { getMap } = getContext(mapKey)

  const map = getMap()

  export let path
  export let isActive

  $: polyline.setOptions({
    strokeColor: isActive ? POLYLINE_COLORS.ACTIVE : POLYLINE_COLORS.DEFAULT,
  })

  const polyline = new google.maps.Polyline({
    path: decodePath(path),
    geodesic: true,
    map,
    strokeColor: POLYLINE_COLORS.DEFAULT,
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
    getTargetType: () => TARGET_TYPES.POLYLINE,
  })

  onDestroy(() => polyline.setMap(null))
</script>

<slot />
