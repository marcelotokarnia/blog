<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️ Cachoeira da Costa da Lagoa'
  const spc = { position: { lat: -27.543693514758985, lng: -48.4639842581842 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/4338971873">Atividade do Strava</a>. Ali na Costa tem
  muitos restaurantes bonitinhos e a maioria tem "convênio" com os barcos, daí você faz a trilha,
  almoça ali e volta de barco "de graça" pras Rendeiras.
</p>
<p>Distância: 16km (ida e volta)</p>
<p>Elevação: 450m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://destinoflorianopolis.com.br/wp-content/uploads/2016/09/Cachoeira-da-Costa-da-Lagoa.jpg"
  alt=""
/>
