<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'

  const title = '⭐️⭐️⭐️⭐️⭐️ Cachoeira do Salto do Rio Vermelho'
  const spc = {"position":{"lat":-27.77149999949421,"lng":-48.79008554295077}, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name} />
</Map>

<p>
  <a href="https://www.strava.com/activities/7187150426">Atividade do Strava</a
  > da melhor cachoeira da região.
</p>
<p>Distância: 5km</p>
<p>Elevação: 250m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/pZwqkYeUkorUq9AX8FKrzSkLRNaA3QjzeRgpab0x-fA-1152x2048.jpg"
  alt=""
/>
