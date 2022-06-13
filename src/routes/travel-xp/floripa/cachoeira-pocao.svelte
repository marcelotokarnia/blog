<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Cachoeira do Poção'
  const spc = { position: { lat: -27.615284643244593, lng: -48.50480521879317 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Cachoeirinha bem good vibes, NO MEIO DA CIDADE, super fácil acesso. Bom pra fazer um passeiozinho
  leve num dia com pouco tempo ou clima mais instável. <a
    href="https://pt.wikiloc.com/trilhas-trekking/cachoeira-do-pocao-75679326"
    >A atividade no Wikiloc</a
  >
</p>
<p>Distância: 2km</p>
<p>Elevação: 60m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://imgs-akamai.mnstatic.com/78/b1/78b117bd3c21063df7cf2880313d51f8.jpg"
  alt=""
/>
