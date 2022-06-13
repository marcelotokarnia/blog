<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️ Morro da Cruz (Morro das Antenas)'
  const spc = { position: { lat: -27.589574601955515, lng: -48.53401406156816 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Não é exatamente trilha, da pra chegar de carro. Recomendo o acesso pela Av. do Antão pela
  Agronômica, o acesso pela Carvoeira é mais íngreme e passa por uns locais meio ermos, estranhos.
  Ótimo lugar pra ver o nascer do sol ou por do sol, tem uma vista bem massa 360º, mas também é um
  local bem ermo, não recomendo ir sozinho, só por precaução.
</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://i.pinimg.com/originals/69/fe/1c/69fe1cf4f0e3fb1f584a034710fa0add.jpg"
  alt=""
/>
