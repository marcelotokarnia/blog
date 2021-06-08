<script context="module" lang="typescript">
  export const mapKey = {}
  export const targetKey = {}
  export enum TARGET_TYPES {
    MARKER = 'MARKER',
    POLYLINE = 'POLYLINE',
  }
</script>

<script lang="typescript">
  import Map from './_renderMap.svelte'
  let mapReady
  $: mapReady = process.browser ? window?.mapReady : null

  export let zoom
  export let center
</script>

{#if mapReady}
  <Map {zoom} {center}><slot /></Map>
{/if}
