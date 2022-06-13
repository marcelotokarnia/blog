<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️⭐️ Morro do Assopro'
  const spc = { position: { lat: -27.575709, lng: -48.471752 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
  <Marker lat={-27.567209} lng={-48.481546} title={'Pedra do Urubu'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Pedra do Urubu' }} />
  </Marker>
</Map>

<p>
  <a href="https://www.strava.com/activities/7067009976">Atividade do Strava</a> mostra a primeira saída
  pra rampa de vôo livre, a segunda pro Mirante do Assopro (com foto) e a terceira é a pedra do Urubu
  com vista pro continente e shopping Floripa (foto na atividade do strava).
</p>
<p>
  Essa trilha tem umas lendas urbanas ai dum moço que mora lá na Pedra do Urubu que às vezes ameaça
  a galera com facão 😅 então eu não recomendo ir sozinho
</p>
<p>
  E realmente, toda vez que eu vou lá eu vejo uma estrutura que realmente parece que alguém mora
  ali, com cama, fogueira, horta e água, e toda vez está um pouco diferente, dando a impressão que
  alguém "mantém" aquilo ali. Então cuidado hehehe, não vá sozinho nessa.
</p>
<p>Distância: 13km</p>
<p>Elevação: 600m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/AgrBIaEZWzMIUibhygAh1zrs1QZTeVO9I39q_ns38DI-2048x1536.jpg"
  alt=""
/>
