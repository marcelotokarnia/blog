<script lang="typescript">
  import 'tachyons/css/tachyons.min.css'
  import Nav from '@components/Nav.svelte'
  export let segment
</script>

<Nav {segment} />

<main class={segment}>
  <slot />
</main>

<style>
  main {
    position: relative;
    max-width: 70em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }

  main.resume {
    max-width: none !important;
    padding: 2em !important;
    margin: 0 auto !important;
  }
</style>
