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
  import Marker, { MARKER_TYPES } from '../../../components/map/Marker.svelte'
  import Map from '../../../components/map/Map.svelte'
  import Polyline from '../../../components/map/Polyline.svelte'
  import waypoints from '../../../travel-xp/floripa/lagoinha-do-leste/waypoints'
  import classnames from 'classnames'
  import { PathIcon } from '../../../components/map/icons'
  import { keys, fromPairs } from 'ramda'

  export let paths

  const center = { lat: -27.774435, lng: -48.497667 }
  let drawerOpen = false
  let chosenMenu = 'paths'
  let waypointsFilter = fromPairs(keys(MARKER_TYPES).map(k => [k, true]))
</script>

<Meta
  title="Lagoinha do Leste"
  description="Lugarzão"
  image="https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,h_627,w_1200,f_auto,q_auto/v1603404538/decabecanomato/d25llawimn8yftnribil.jpg"
/>

<div class="controls">
  <button on:click={() => (drawerOpen = !drawerOpen)}
    >{drawerOpen ? 'Fechar Legenda 👈🏻' : 'Abrir Legenda 👉🏻'}</button
  >
</div>

<div class="flex">
  <div class="flex4">
    <Map zoom={14} {center}>
      {#each paths as { path, isActive, name }}
        <Polyline {path} {isActive}
          ><InfoWindow component={BasicInfoWindow} props={{ title: name }} /></Polyline
        >
      {/each}
      {#each waypoints as { name, position, type, bounceMs }}
        {#if waypointsFilter[type]}
          <Marker {...position} title={name} {type} {bounceMs}
            ><InfoWindow component={BasicInfoWindow} props={{ title: name }} /></Marker
          >
        {/if}
      {/each}
    </Map>
  </div>

  <div class={classnames('map-size', { flex1: drawerOpen, hide: !drawerOpen })}>
    <div class="flex">
      <button
        on:click={() => (chosenMenu = 'paths')}
        class={classnames('flex1', { pressed: chosenMenu === 'paths' })}>Caminhos</button
      >
      <button
        on:click={() => (chosenMenu = 'waypoints')}
        class={classnames('flex1', { pressed: chosenMenu === 'waypoints' })}
        >Pontos de Interesse</button
      >
    </div>
    <ul class="menu">
      {#if chosenMenu === 'paths'}
        {#each paths as path}
          <li
            on:mouseenter={() => (path.isActive = true)}
            on:mouseleave={() => (path.isActive = false)}
          >
            <PathIcon />
            {path.name}
          </li>
        {/each}
      {/if}
      {#if chosenMenu === 'waypoints'}
        <div class="filters">
          {#each keys(waypointsFilter) as key}
            <button
              on:click={() => (waypointsFilter[key] = !waypointsFilter[key])}
              class={classnames({ pressed: waypointsFilter[key] })}
              ><svelte:component this={MARKER_TYPES[key].icon} fill="black" /></button
            >
          {/each}
        </div>
        {#each waypoints as wp}
          {#if waypointsFilter[wp.type]}
            <li on:mouseenter={() => (wp.bounceMs = 600)} on:mouseleave={() => (wp.bounceMs = 0)}>
              <svelte:component this={MARKER_TYPES[wp.type].icon} />
              {wp.name}
            </li>
          {/if}
        {/each}
      {/if}
    </ul>
  </div>
</div>

<style>
  .menu li {
    display: block;
  }
  .map-size {
    overflow: scroll;
  }
  .menu {
    padding-inline-start: 10px;
  }
  .controls {
    text-align: right;
    margin-bottom: 5px;
  }

  .filters {
    margin: 10px 0;
  }

  .pressed {
    opacity: 0.5;
  }
  .flex1 {
    flex: 1;
  }
  .flex4 {
    flex: 4;
  }
</style>
