<script context="module">
  export const markerKey = {}
</script>

<script>
  import { getContext, setContext, onDestroy } from 'svelte'
  import { mapKey } from './Map.svelte'

  const { getMap } = getContext(mapKey)
  const map = getMap()

  export let lat
  export let lng
  export let title

  const marker = new google.maps.Marker({
    position: { lat, lng },
    map,
    title,
  })

  setContext(markerKey, {
    getMarker: () => marker,
  })

  onDestroy(() => marker.setMap(null))
</script>

<slot />
