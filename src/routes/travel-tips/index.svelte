<script>
  import Map from '../../travel-tips/Map.svelte'
  import Marker from '../../travel-tips/Marker.svelte'
  import InfoWindow from '../../travel-tips/InfoWindow.svelte'
  import Floripa from '../../travel-tips/Floripa.svelte'
  let mapReady
  $: mapReady = window.mapReady
</script>

{#if mapReady}
  <Map>
    <Marker lat={-27.602499} lng={-48.49048} title={'Floripa'}>
      <InfoWindow component={Floripa} props={{ a: 42 }} />
    </Marker>
  </Map>
{/if}
