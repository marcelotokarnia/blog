<script>
  import BasicInfoWindow from './map/BasicInfoWindow.svelte'
  import InfoWindow from './map/InfoWindow.svelte'
  import Marker from './map/Marker.svelte'
  import { MARKER_TYPES } from './map/Marker.ts'
  import Map from './map/Map.svelte'
  import Polyline from './map/Polyline.svelte'
  import classnames from 'classnames'
  import { PathIcon } from './map/icons'

  export let center
  export let zoom
  export let waypoints = []
  export let paths

  let drawerOpen = true
  let chosenMenu = 'paths'
</script>

<div class="controls">
  <button on:click={() => (drawerOpen = !drawerOpen)}
    >{drawerOpen ? 'Fechar Legenda 👈🏻' : 'Abrir Legenda 👉🏻'}</button
  >
</div>
<div class="flex">
  <div class="flex4">
    <Map {zoom} {center}>
      {#each paths as { path, isActive, name }}
        <Polyline {path} {isActive}>
          <InfoWindow component={BasicInfoWindow} props={{ title: name }} />
        </Polyline>
      {/each}
      {#each waypoints as { name, position, type, bounceMs }}
        <Marker {...position} title={name} {type} {bounceMs}>
          <InfoWindow component={BasicInfoWindow} props={{ title: name }} />
        </Marker>
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
            {#if path.link}
              <a href={path.link} target="_blank">{path.name}</a>
            {:else}
              {path.name}{/if}
          </li>
        {/each}
      {/if}
      {#if chosenMenu === 'waypoints'}
        {#each waypoints as wp}
          <li on:mouseenter={() => (wp.bounceMs = 600)} on:mouseleave={() => (wp.bounceMs = 0)}>
            <img src={MARKER_TYPES[wp.type].image} alt={''} />
            {wp.name}
          </li>
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
