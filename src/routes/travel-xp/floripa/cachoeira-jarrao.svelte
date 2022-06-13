<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Cachoeira do Jarrão'
  const spc = { position: { lat: -27.73253323977083, lng: -48.653021091472574 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/5063208557">Atividade do Strava</a>. Tem bordinha
  infinita e tudo. Da pra estacionar o carro no posto Cambirela e de lá ir caminhando pro acesso a
  trilha.
</p>
<p>Distância: 3km</p>
<p>Elevação: 130m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/Go9pEW1XeWPhEBAW-xQlFlz_Seafdc97a8VXhQ0lW2s-1536x2048.jpg"
  alt=""
/>
<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/N0DBCFHfHajYiZwRiZVYFBmdFm5_HZUfutiqnQ5fzFg-2048x1536.jpg"
  alt=""
/>
