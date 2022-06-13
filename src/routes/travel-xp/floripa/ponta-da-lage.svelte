<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️ Ponta da Lage'
  const spc = { position: { lat: -27.38770149927642, lng: -48.43255848960548 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Morro da direita <a href="https://www.strava.com/activities/4979722002">na atividade do Strava</a
  >, entre Ponta das Canas e Lagoinha do Norte. Honestamente, nada demais hahahah.
</p>
<p>Distância: 3km</p>
<p>Elevação: 20m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://s2.wklcdn.com/image_84/2534847/16060005/10058159Master.jpg"
  alt=""
/>
