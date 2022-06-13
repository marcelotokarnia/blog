<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'

  const title = '⭐️⭐️⭐️ Morro das Aranhas'
  const spc = {"position":{"lat":-27.472734275332712,"lng":-48.37983384209141}, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name} />
</Map>

<p>
  <a href="https://www.strava.com/activities/6226129566">A atividade do Strava</a
  > da a volta no Morro, desce na praia de Moçambique e sobe pela pedra do Marimbondo. Ainda tem a "Lagoa das Lavadeiras" ali por perto, mas eu não conheço ainda.
</p>
<p>Distância: 6km</p>
<p>Elevação: 350m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/DI-L_hxmfKBLUVQM8HnJDcO7ONM5DsQI8X0x7CEtPCA-1536x2048.jpg"
  alt=""
/>
