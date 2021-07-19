<script>
  import Map from '../../components/map/Map.svelte'
  import Meta from '../../components/Meta.svelte'
  import Marker from '../../components/map/Marker.svelte'
  import Polygon from '../../components/map/Polygon.svelte'
  import InfoWindow from '../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../components/map/BasicInfoWindow.svelte'
  import { spec as floripaSpec } from './floripa/index.svelte'
  import { spec as itatiaiaSpec } from './itatiaia/index.svelte'
  import { spec as serraFinaSpec } from './serra-fina/index.svelte'
  import { spec as chapadaVeadeirosSpec } from './chapada-dos-veadeiros/index.svelte'

  const specs = [floripaSpec, itatiaiaSpec, serraFinaSpec, chapadaVeadeirosSpec]
</script>

<Meta title="Experiências de viagem" description="Altos picos" />
<Map>
  {#each specs as spc}
    <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
      <Polygon paths={spc.polygon} autoRemove={true} />
      <InfoWindow component={BasicInfoWindow} props={{ title: spc.name, href: spc.href }} />
    </Marker>
  {/each}
</Map>
