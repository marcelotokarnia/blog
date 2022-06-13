<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Ilha do Francês'
  const spc = { position: { lat: -27.417162162729593, lng: -48.47652271902144 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Não é exatamente uma trilha né? Honestamente, eu não achei nada demais hehehe. Vale a pena alugar
  um kayak ou stand up e ir remando, é mais legal heheeh.
</p>
<p>Vai muito barco pra lá fazer festa, churrasco, música alta, achei desagradável.</p>
<p>Distância: 3km</p>
<p>Elevação: 0m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://i.pinimg.com/originals/ee/98/d8/ee98d86fc5ee20e2682f73c6a0ba3dc6.jpg"
  alt=""
/>
