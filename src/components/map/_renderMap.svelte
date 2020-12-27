<script>
  import { setContext, onMount } from 'svelte'
  import { mapKey } from './Map.svelte'

  setContext(mapKey, {
    getMap: () => map,
  })

  let container
  let map

  export let zoom = 4
  export let center = { lat: -18.043764, lng: -47.404244 }

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
      mapTypeId: google.maps.MapTypeId.HYBRID,
    })
    map.toCloseOnClick = {}
    map.registerCloseOnClick = (id, infoWindow) => (map.toCloseOnClick[id] = infoWindow)
    map.deregisterCloseOnClick = id => {
      delete map.toCloseOnClick[id]
    }
    map.closeAll = () => {
      const toClose = Object.values(map.toCloseOnClick)
      toClose.forEach(e => e.close())
      map.toCloseOnClick = {}
    }
    map.addListener('click', e => console.log({ lat: e.latLng.lat(), lng: e.latLng.lng() }))
    map.addListener('click', map.closeAll)
  })
</script>

<div class="map-size" bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>

<style>
  .map-size {
    width: 100%;
    height: 70vh;
  }
</style>
