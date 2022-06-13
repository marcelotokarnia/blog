<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Cachoeira do Poção'
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
  Cachoeirinha bem good vibes, NO MEIO DA CIDADE, super fácil acesso. Bom pra fazer um passeiozinho
  leve num dia com pouco tempo ou clima mais instável. <a href="https://strava.comblablabla"
    >A atividade no Wikiloc</a
  >
</p>
<p>Distância: km</p>
<p>Elevação: m</p>

<img src="https://res.cloudinary.com/marcelotokarnia/image/fetch/" alt="" />
