<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'

  const title = '⭐️⭐️ Morro da Feiticeira'
  const spc = { position: { lat: -27.435810861558277, lng: -48.51695146676019 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name} />
</Map>

<p>
  Morro da esquerda <a href="https://www.strava.com/activities/5001346805">na atividade do Strava</a
  >, entre Jurerê e a Daniela. Ótimo para ver o pôr do sol.
</p>
<p>Distância: 5km</p>
<p>Elevação: 120m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/glDOTUTGkDf6gZw21icvN-UA5LqFRrJpW_GaVhhvXto-2048x1536.jpg"
  alt=""
/>
