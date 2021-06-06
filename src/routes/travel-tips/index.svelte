<script>
  import Map from '../../components/map/Map.svelte'
  import Marker from '../../components/map/Marker.svelte'
  import InfoWindow from '../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../components/map/BasicInfoWindow.svelte'
  import { spec as floripaSpec } from './floripa/index.svelte'

  const specs = [floripaSpec]
  let mapReady
  $: mapReady = window.mapReady
</script>

{#if mapReady}
  <Map>
    {#each specs as spc}
      <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
        <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
      </Marker>
    {/each}
  </Map>
{/if}
