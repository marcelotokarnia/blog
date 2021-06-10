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
  import BasicInfoWindow from '../../../components/map/BasicInfoWindow.svelte'
  import InfoWindow from '../../../components/map/InfoWindow.svelte'
  import Marker from '../../../components/map/Marker.svelte'
  import Map from '../../../components/map/Map.svelte'
  import Polyline from '../../../components/map/Polyline.svelte'
  import waypoints from '../../../travel-xp/floripa/lagoinha-do-leste/waypoints'
  export let paths

  const center = { lat: -27.774435, lng: -48.497667 }
</script>

<Meta
  title="Lagoinha do Leste"
  description="Lugarzão"
  image="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1603404538/decabecanomato/d25llawimn8yftnribil.jpg"
/>

<div class="flex">
  <div class="flex6">
    <Map zoom={14} {center}>
      {#each paths as { path, isActive, name }}
        <Polyline {path} {isActive}
          ><InfoWindow component={BasicInfoWindow} props={{ title: name }} /></Polyline
        >
      {/each}
      {#each waypoints as { name, position, bounceMs }}
        <Marker {...position} title={name} {bounceMs}
          ><InfoWindow component={BasicInfoWindow} props={{ title: name }} /></Marker
        >
      {/each}
    </Map>
  </div>

  <ul class="flex1">
    {#each paths as path}
      <li
        on:mouseenter={() => (path.isActive = true)}
        on:mouseleave={() => (path.isActive = false)}
      >
        {path.name}
      </li>
    {/each}
    {#each waypoints as wp}
      <li on:mouseenter={() => (wp.bounceMs = 600)} on:mouseleave={() => (wp.bounceMs = 0)}>
        {wp.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  .flex1 {
    flex: 1;
  }
  .flex6 {
    flex: 6;
  }
</style>
