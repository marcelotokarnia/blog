<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Praia do Gravatá'
  const spc = { position: { lat: -27.584633401280968, lng: -48.42461224132191 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
  <Marker lat={-27.57192831023285} lng={-48.41530356475682} title={'Praia Secret Spot'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Praia Secret Spot' }} />
  </Marker>
</Map>

<p>
  Essa <a href="https://www.strava.com/activities/5465343048">atividade do Strava</a> da a volta, passando
  pelas duas praias.
</p>
<p>Distância: km</p>
<p>Elevação: m</p>

<img src="https://res.cloudinary.com/marcelotokarnia/image/fetch/" alt="" />
