<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️⭐️⭐️ Cambirela'
  const spc = { position: { lat: -27.719289873051693, lng: -48.6684983304647 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  A dica é estacionar na Komeco, ali no começo <a
    href="https://www.strava.com/activities/7293178262">da atividade do Strava</a
  > pq a trilha começa direto na BR, não tem onde estacionar. A partir dali é muita subida e terreno
  íngreme, mas não tem muito erro não, a trilha é bem sinalizada.
</p>
<p>Distância: 7.5km</p>
<p>Elevação: 850m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/L4qJZvCq-6FP6mO8v3W_bd-0vN9nWZ191Ta-CD035ak-2048x1536.jpg"
  alt=""
/>
