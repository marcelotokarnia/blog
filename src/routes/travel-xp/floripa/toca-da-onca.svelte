<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Toca da Onça'
  const spc = { position: { lat: -27.446465404516317, lng: -48.36164947755078 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/5426340684">Atividade do Strava</a>
</p>
<p>Distância: 5km</p>
<p>Elevação: 300m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/krviql74JOKTlYuBGGHwNJWTsIq-g0kSqkC8InWlQN0-1536x2048.jpg"
  alt=""
/>
