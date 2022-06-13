<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Morro do Rapa'
  const spc = { position: { lat: -27.387789238223046, lng: -48.41486199797258 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/5104352470">A atividade do Strava</a>. Curiosamente
  essa trilha faz parte do Caminho de Santiago (WTF!?). Não sei direito como funciona, mas pra você
  ganhar o passaporte lá do caminho de Santiago você tem que ter percorrido X kms lá na Europa, e
  essa trilha conta 🤷🏻‍♀️
</p>
<p>Distância: 9km</p>
<p>Elevação: 350m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://trilhasemsc.com.br/public/img/trilhas/descricao/trilha-do-morro-do-rapa/portal-de-pedras.jpg"
  alt=""
/>
