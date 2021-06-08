<script context="module">
  export const markerKey = {}
</script>

<script>
  import { identical } from 'ramda'

  import { getContext, setContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'

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

  setContext(markerKey, {
    getMarker: () => marker,
  })

  onDestroy(() => marker.setMap(null))
</script>

<slot />
