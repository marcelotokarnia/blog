<script>
  import { getContext, setContext, onDestroy } from 'svelte'
  import { mapKey, targetKey, TARGET_TYPES } from './Map.svelte'
  import { MARKER_TYPES } from './Marker.ts'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let lat
  export let lng
  export let title
  export let bounceMs
  export let type = ''

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
    icon: type ? MARKER_TYPES[type].image : null,
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
