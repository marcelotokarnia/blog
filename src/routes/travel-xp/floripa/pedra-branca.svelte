<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'

  const title = '⭐️⭐️⭐️⭐️ Pedra Branca'
  const spc = {"position":{"lat":-27.611051366819726,"lng":-48.70504940362288}, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name} />
</Map>

<p>
   <a href="https://www.strava.com/activities/5420119909">A atividade do Strava</a
  >
</p>
<p>Distância: 6km</p>
<p>Elevação: 450m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/NfLTKABghJKHyMiEW7AK6ECmwPMZnTGHnb56i8q5kCI-2048x1536.jpg"
  alt=""
/>
