<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Praia do Gravatá'
  const spc = { position: { lat: -27.613610896712114, lng: -48.433612429366164 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
  <Marker lat={-27.621866542898204} lng={-48.4425471789685} title={'Praia Secret Spot'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Praia Secret Spot' }} />
  </Marker>
</Map>

<p>
  Essa <a href="https://www.strava.com/activities/5150976987">atividade do Strava</a> da a volta, passando
  pelas duas praias.
</p>
<p>Distância: 5km</p>
<p>Elevação: 200m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/PycRxY14IcC2MU4c1ZGH698uozWQiwGtoCxS3bHpWCc-2048x1536.jpg"
  alt=""
/>
