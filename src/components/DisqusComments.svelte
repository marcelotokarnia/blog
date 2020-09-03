<script>
  export let id
  var disqus_config = function() {
    this.page.url = window.location.href
    this.page.identifier = id
  }
</script>

<svelte:head>
  <script src="https://marcelo-blog.disqus.com/embed.js" data-timestamp={+new Date()}>

  </script>
</svelte:head>

<div id="disqus_thread" />
