<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Ilha do Campeche'
  const spc = { position: { lat: -27.584633401280968, lng: -48.42461224132191 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  Não é exatamente uma trilha né? Honestamente, eu não achei nada demais hehehe. Os barcos cobram
  uma fortuna pra levar lá, tipo uns 150 reais. Vale a pena alugar um kayak ou stand up e ir
  remando, é mais legal heheeh.
</p>
<p>
  Até tem umas trilhas lá dentro, mas principalmente fds e na temporada sempre tem uns "guardinhas"
  proibindo tudo. Porque a ilha é patrimônio e tals, teria que contratar guia ou ir outro dia.
</p>
<p>Distância: 5km</p>
<p>Elevação: 0m</p>

<img src="https://res.cloudinary.com/marcelotokarnia/image/fetch/" alt="" />
