<script context="module" lang="typescript">
  export const mapKey = {}
  export const targetKey = {}
  export enum TARGET_TYPES {
    MARKER = 'MARKER',
    POLYLINE = 'POLYLINE',
  }
</script>

<script>
  import Map from './_renderMap.svelte'
  let mapReady
  $: mapReady = window.mapReady

  export let zoom
  export let center
</script>

{#if mapReady}
  <Map {zoom} {center}><slot /></Map>
{/if}
