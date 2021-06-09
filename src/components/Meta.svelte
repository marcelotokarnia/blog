<script context="module">
  let count = 0
</script>

<script>
  import { onMount } from 'svelte'

  let num
  onMount(() => {
    num = ++count
  })

  export let description = 'A little bit of code tips, travel experiences and everything in between'
  export let title = 'Marcelo Tokarnia'
  export let image =
    'https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_627,w_1200,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg'
</script>

{#if num === 1}
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
{/if}
