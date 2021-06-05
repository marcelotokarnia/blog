<script>
  import { onMount } from 'svelte'
  import floripa from './Floripa.html'

  let container
  let map

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom: 4,
      center: { lat: -18.043764, lng: -47.404244 },
      mapTypeId: google.maps.MapTypeId.HYBRID,
    })
    const infowindow = new google.maps.InfoWindow({
      content: floripa,
    })
    const marker = new google.maps.Marker({
      position: { lat: -27.602499, lng: -48.49048 },
      map,
      title: 'Floripa',
    })
    marker.addListener('click', () => {
      infowindow.open(map, marker)
    })
  })
</script>

<div class="map-size" bind:this={container} />

<style>
  .map-size {
    width: 100%;
    height: 70vh;
  }
</style>
