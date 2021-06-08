<script context="module" lang="typescript">
  export enum MARKER_TYPES {
    SHOP = 'SHOP',
    SUMMIT = 'SUMMIT',
    VIEWPOINT = 'VIEWPOINT',
    CAMPING = 'CAMPING',
    WATER = 'WATER',
    INFO = 'INFO',
    CAVE = 'CAVE',
    WATERFALL = 'WATERFALL',
  }
</script>

<script>
  import { getContext, setContext, onDestroy } from 'svelte'
  import { mapKey, targetKey, TARGET_TYPES } from './Map.svelte'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let lat
  export let lng
  export let title
  export let bounceMs

  $: if (bounceMs) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
    setTimeout(() => {
      marker.setAnimation(null)
    }, bounceMs)
  }

  const marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title,
  })

  marker.toRemoveKeys = {}
  marker.registerRemoveKey = (id, obj) => (marker.toRemoveKeys[id] = obj)
  marker.deregisterRemoveKey = id => {
    delete marker.toRemoveKeys[id]
  }

  setContext(targetKey, {
    getTarget: () => marker,
    getTargetType: () => TARGET_TYPES.MARKER,
  })

  onDestroy(() => marker.setMap(null))
</script>

<slot />
