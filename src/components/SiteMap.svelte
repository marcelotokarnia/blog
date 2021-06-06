<script>
  const hiddenUrls = ['/travel-tips', '/travel-tips/floripa', '/feed.xml']
</script>

{#each hiddenUrls as href}
  <a class="hide" {href}>hidden</a>
{/each}
