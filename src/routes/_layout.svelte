<script lang="typescript">
  import 'tachyons/css/tachyons.min.css'
  import Nav from '../components/Nav.svelte'
  import Meta from '../components/Meta.svelte'
  export let segment
</script>

<Nav {segment} />

<main class={segment}>
  <slot />
</main>

<svelte:head>
  <meta charset="UTF-8" />
  <meta
    name="keywords"
    content="Marcelo,Tokarnia,Coding,Travel,Experiences,Tips,Typescript,Nomad,Minimalist"
  />
  <meta name="author" content="Marcelo Tokarnia" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
</svelte:head>

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
