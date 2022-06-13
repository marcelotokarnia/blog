<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Ponta do Coral'
  const spc = { position: { lat: -27.569949576576175, lng: -48.537073038250654 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Não é exatamente uma trilha. Mas é um ponto um pouco mais "escondido" na beira mar norte. Super
  bonito pra relaxar e ver o pôr do sol.
</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://files.nsctotal.com.br/s3fs-public/graphql-upload-files/ponta-do-coral-florianopolis-sc_0.jpg?E2M25dtHpPtuoH_CQQqpiXVqrV9vjRRv"
  alt=""
/>
