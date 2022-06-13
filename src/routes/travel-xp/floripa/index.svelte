<script context="module">
  export const spec = {
    name: 'Florianópolis',
    position: { lat: -27.602499, lng: -48.49048 },
    polygon:
      'tuogDlukgHz{@ewBfzA}i@lcAfsDxmD|i@loC?blE?vgCvXb`CvX``C?vaBeP~_CwXnrAabDmxBabDgiBytAet@}pCmxBor@qxBucAo~CvXefDytAqrAwX_}DqGooCsnByaBytA?quEuxBewBcwCnr@mfDz{D{dEglAurAm}Aul@quE}aGm}AyuDvXm}DflAscAfsDabBldEgNx{DnzAhhClzAtjD`bBhhCn`CjdE`hCjhClzAglAjzA?vrAucApiB?~gCha@bkA{i@hzA`{@x{@xtAbkAtcAzgCia@',
    href: '/travel-xp/floripa',
  }
</script>

<script>
  import Meta from '../../../components/Meta.svelte'
  import Map from '../../../components/map/Map.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'

  const specs = [
    {
      position: { lat: -27.774435, lng: -48.497667 },
      name: '⭐️⭐️⭐️⭐️⭐️ Lagoinha do Leste',
      href: '/travel-xp/floripa/lagoinha-do-leste',
    },
    {
      position: { lat: -27.77149999949421, lng: -48.79008554295077 },
      name: '⭐️⭐️⭐️⭐️⭐️ Cachoeira do Salto do Rio Vermelho',
      href: '/travel-xp/floripa/cachoeira-rio-vermelho',
    },
    {
      position: { lat: -27.719289873051693, lng: -48.6684983304647 },
      name: '⭐️⭐️⭐️⭐️⭐️ Cambirela',
      href: '/travel-xp/floripa/cambirela',
    },
    {
      position: { lat: -27.611051366819726, lng: -48.70504940362288 },
      name: '⭐️⭐️⭐️⭐️ Pedra Branca',
      href: '/travel-xp/floripa/pedra-branca',
    },
    {
      position: { lat: -27.584633401280968, lng: -48.42461224132191 },
      name: '⭐️⭐️⭐️⭐️ Barra da Lagoa -> Piscinas Naturais -> Alto da Boa Vista -> Galheta',
      href: '/travel-xp/floripa/alto-da-boa-vista',
    },
    {
      position: { lat: -27.575709, lng: -48.471752 },
      name: '⭐️⭐️⭐️⭐️ Morro do Assopro -> Pedra do Urubu',
      href: '/travel-xp/floripa/morro-do-assopro',
    },
    {
      position: { lat: -27.472734275332712, lng: -48.37983384209141 },
      name: '⭐️⭐️⭐️ Santinho -> Morro das Aranha -> Pedra do Marimbondo -> Moçambique',
      href: '/travel-xp/floripa/morro-das-aranhas',
    },
    {
      position: { lat: -27.446465404516317, lng: -48.36164947755078 },
      name: '⭐️⭐️⭐️ Ingleses -> Toca da Onça -> Santinho',
      href: '/travel-xp/floripa/toca-da-onca',
    },
    {
      position: { lat: -27.670401611646646, lng: -48.49290970087412 },
      name: '⭐️⭐️⭐️ Morro do Lampião',
      href: '/travel-xp/floripa/morro-do-lampiao',
    },
    {
      position: { lat: -27.74993835301106, lng: -48.53162095819793 },
      name: '⭐️⭐️⭐️ Trilha da Gurita -> Cachoeiras do Sertão',
      href: '/travel-xp/floripa/gurita-sertao',
    },
    {
      position: { lat: -27.584633401280968, lng: -48.42461224132191 },
      name: '⭐️⭐️⭐️ Caverna do Pântano',
      href: '/travel-xp/floripa/caverna-pantano',
    },
    {
      position: { lat: -27.833720123677498, lng: -48.562555142009835 },
      name: '⭐️⭐️⭐️ Solidão -> Naufragados -> Caieira',
      href: '/travel-xp/floripa/naufragados',
    },
    {
      position: { lat: -27.589574601955515, lng: -48.53401406156816 },
      name: '⭐️⭐️⭐️ Morro da Cruz',
      href: '/travel-xp/floripa/morro-da-cruz',
    },
    {
      position: { lat: -27.73253323977083, lng: -48.653021091472574 },
      name: '⭐️⭐️⭐️ Cachoeira do Jarrão',
      href: '/travel-xp/floripa/cachoeira-jarrao',
    },
    {
      position: { lat: -27.613610896712114, lng: -48.433612429366164 },
      name: '⭐️⭐️⭐️ Praia do Gravatá -> Secret',
      href: '/travel-xp/floripa/gravata-secret',
    },
    {
      position: { lat: -27.435810861558277, lng: -48.51695146676019 },
      name: '⭐️⭐️ Jurerê -> Morro do Farol -> Praia da Daniela',
      href: '/travel-xp/floripa/morro-do-farol',
    },
    {
      position: { lat: -27.387789238223046, lng: -48.41486199797258 },
      name: '⭐️⭐️ Lagoinha do Norte -> Morro do Rapa -> Praia Brava',
      href: '/travel-xp/floripa/morro-do-rapa',
    },
    {
      position: { lat: -27.409829979333622, lng: -48.40739802026528 },
      name: '⭐️⭐️ Praia Brava -> Morro da Feiticeira -> Ingleses',
      href: '/travel-xp/floripa/morro-da-feiticeira',
    },
    {
      position: { lat: -27.543693514758985, lng: -48.4639842581842 },
      name: '⭐️⭐️ Cachoeira da Costa da Lagoa',
      href: '/travel-xp/floripa/cachoeira-costa-lagoa',
    },
    {
      position: { lat: -27.794418762681993, lng: -48.53767640414582 },
      name: '⭐️⭐️ Cachoeira da Solidão',
      href: '/travel-xp/floripa/cachoeira-solidao',
    },
    {
      position: { lat: -27.69632633042641, lng: -48.46591292531046 },
      name: '⭐️⭐️ Ilha do Campeche',
      href: '/travel-xp/floripa/ilha-campeche',
    },
    {
      position: { lat: -27.417162162729593, lng: -48.47652271902144 },
      name: '⭐️⭐️ Ilha do Francês',
      href: '/travel-xp/floripa/ilha-frances',
    },
    {
      position: { lat: -27.615284643244593, lng: -48.50480521879317 },
      name: '⭐️⭐️ Cachoeira do Poção',
      href: '/travel-xp/floripa/cachoeira-pocao',
    },
    {
      position: { lat: -27.569949576576175, lng: -48.537073038250654 },
      name: '⭐️⭐️ Ponta do Coral',
      href: '/travel-xp/floripa/ponta-coral',
    },
    {
      position: { lat: -27.38770149927642, lng: -48.43255848960548 },
      name: '⭐️ Ponta das Canas -> Ponta da Lage -> Lagoinha do Norte',
      href: '/travel-xp/floripa/ponta-da-lage',
    },
  ]
</script>

<Meta title="Florianópolis" description="Lugarzão" />

<h2>Florianópolis</h2>

<Map zoom={10} center={spec.position}>
  {#each specs as spc}
    <Marker lat={spc.position.lat} lng={spc.position.lng} title={spc.name}>
      <InfoWindow component={BasicInfoWindow} props={{ title: spc.name, href: spc.href }} />
    </Marker>
  {/each}
</Map>

{#each specs as spc}
  <div><a href={spc.href}> {spc.name} </a></div>
{/each}
