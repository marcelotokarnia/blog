<script>
  import { onMount } from 'svelte'

  export let id

  $: if (process.browser) {
    window.document.querySelector('#disqus_thread') &&
    window.DISQUS &&
    window.DISQUS.reset({
      reload: true,
      config: function() {
        this.page.url = window.location.href
        this.page.identifier = id
      },
    })
  }
</script>

<svelte:head>
  <script src="https://marcelo-blog.disqus.com/embed.js" data-timestamp={+new Date()} />
</svelte:head>

<div id="disqus_thread" />
