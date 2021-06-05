<script>
  import Map from '../../travel-tips/Map.svelte'
  let mapReady
  $: mapReady = window.mapReady
</script>

{#if mapReady}
<Map />
{ /if }