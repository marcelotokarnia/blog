<script>
  import Map from '../../../components/map/Map.svelte'
  import Meta from '../../../components/Meta.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const title = '⭐️⭐️⭐️⭐️ Alto da Boa Vista'
  const spc = { position: { lat: -27.584633401280968, lng: -48.42461224132191 }, name: title }
</script>

<h2>{title}</h2>

<Meta {title} description={title} />
<Map zoom={12} center={spc.position}>
  <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
    <InfoWindow component={BasicInfoWindow} props={{ title: spc.name }} />
  </Marker>
  <Marker lat={-27.57192831023285} lng={-48.41530356475682} title={'Piscinas Naturais'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Piscinas Naturais' }} />
  </Marker>
  <Marker lat={-27.575968118358237} lng={-48.41665544874795} title={'Farol da Barra'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Farol da Barra' }} />
  </Marker>
  <Marker lat={-27.5897871480814} lng={-48.4288561054775} title={'Dolmen da Oração'}>
    <InfoWindow component={BasicInfoWindow} props={{ title: 'Dolmen da Oração' }} />
  </Marker>
</Map>

<p>
  Essa <a href="https://www.strava.com/activities/5465343048">atividade do Strava</a> da uma volta
  completa ali na região hehehe, coloquei diferentes pins pra marcar pontos de interesse. Só ficou
  faltando passar no Dolmen da oração, mas
  <a href="https://www.strava.com/activities/5347295171">essa outra atividade passa</a>
</p>
<p>Distância: 10km</p>
<p>Elevação: 550m</p>

<img
  src="https://res.cloudinary.com/marcelotokarnia/image/fetch/https://dgtzuqphqg23d.cloudfront.net/wXScW-QN00iwhI2VlY8S4ljKxz40nG2LZ2ylaxaNOiI-2048x1536.jpg"
  alt=""
/>
