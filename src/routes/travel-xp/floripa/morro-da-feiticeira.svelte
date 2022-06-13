<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Morro da Feiticeira'
  const spc = { position: { lat: -27.409829979333622, lng: -48.40739802026528 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.wikiloc.com/hiking-trails/morro-da-feiticeira-e-morro-da-cachoeira-53367778"
    >Atividade do Wikiloc</a
  >.
</p>
<p>Distância: 8.5km</p>
<p>Elevação: 350m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://s2.wklcdn.com/image_188/5659819/53367809/35569628Master.jpg"
  alt=""
/>
