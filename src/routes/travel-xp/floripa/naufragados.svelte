<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Naufragados'
  const spc = { position: { lat: -27.833720123677498, lng: -48.562555142009835 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Referência do <a
    href="https://pt.wikiloc.com/trilhas-trekking/travessia-extremo-sul-da-ilha-de-florianopolis-83945730"
    >Wikiloc</a
  >
</p>
<p>Distância: 12km</p>
<p>Elevação: 550m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://www.pousadadoschas.com.br/blog/wp-content/uploads/2020/12/53.jpg"
  alt=""
/>
