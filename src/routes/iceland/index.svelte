<script context="module">
  export async function preload({ query, params }) {
    const res = await this.fetch(`iceland/data.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { paths: data.paths }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Meta from '../../components/Meta.svelte'
  import WaypointsAndPaths from '../../components/WaypointsAndPaths.svelte'
  import waypoints from '../../travel-xp/iceland/waypoints'

  const center = { lat: 64.8261753343854, lng: -18.448344754406953 }
  const zoom = 6
  export let paths
</script>

<Meta
  title="Islândia"
  description="O lugar mais bonito que eu já fui na minha vida"
  image="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1651191749/blog/travel-xp/torres-del-paine/mirante_los_cuernos_mzg4qb.jpg"
/>

<div><h1 class="tc">Resumão da Islândia</h1></div>

<div class="mb6">
  <img
    alt="acrobacias no mirador los cuernos em torres del paine"
    src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1651191749/blog/travel-xp/torres-del-paine/mirante_los_cuernos_mzg4qb.jpg"
  />
</div>

<div class="flex mb4" />
<WaypointsAndPaths {zoom} {center} {paths} {waypoints} />
