<script context="module">
  export async function preload({ query, params }) {
    const res = await this.fetch(`travel-xp/floripa/lagoinha-do-leste.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { paths: data.paths }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Meta from '../../../components/Meta.svelte'
  import WaypointsAndPaths from '../../../components/WaypointsAndPaths.svelte'
  import waypoints from '../../../travel-xp/floripa/lagoinha-do-leste/waypoints'

  export let paths

  const center = { lat: -27.774435, lng: -48.497667 }
  const zoom = 14
</script>

<Meta
  title="Lagoinha do Leste"
  description="Lugarzão"
  image="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1603404538/decabecanomato/d25llawimn8yftnribil.jpg"
/>

<WaypointsAndPaths {waypoints} {zoom} {center} {paths} />
