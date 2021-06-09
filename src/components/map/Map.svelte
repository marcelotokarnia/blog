<script context="module">
  export const mapKey = {}
  export const targetKey = {}
  export const TARGET_TYPES = {
    MARKER: 'MARKER',
    POLYLINE: 'POLYLINE',
  }
</script>

<script>
  import Map from './_renderMap.svelte'
  let mapReady
  $: mapReady = process.browser ? window.mapReady : null

  export let zoom
  export let center
</script>

{#if mapReady}
  <Map {zoom} {center}><slot /></Map>
{/if}
