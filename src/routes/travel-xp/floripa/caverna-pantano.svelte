<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Caverna do Pântano (Toca da Nêga)'
  const spc = { position: { lat: -27.584633401280968, lng: -48.42461224132191 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/7218181303">Atividade do Strava</a>
</p>
<p>Distância: 5.5km</p>
<p>Elevação: 180m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/t-KaoyppdXVixhVEJwphw4OkC7ars1IVB7RBLzZAX-4-1536x2048.jpg"
  alt=""
/>
