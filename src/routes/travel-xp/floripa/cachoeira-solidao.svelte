<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Cachoeira da Solidão'
  const spc = { position: { lat: -27.794418762681993, lng: -48.53767640414582 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://pt.wikiloc.com/trilhas-trekking/trilha-da-cachoeira-da-solidao-32709349"
    >Atividade do Wikiloc</a
  >. Bem facinho de chegar. A trilha é curta e cheia de indicações.
</p>
<p>Distância: 1km</p>
<p>Elevação: 50m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://s2.wklcdn.com/image_155/4658744/32709359/21072692Master.jpg"
  alt=""
/>
