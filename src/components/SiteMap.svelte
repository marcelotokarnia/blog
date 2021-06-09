<script>
  const hiddenUrls = ['/travel-xp', '/travel-xp/floripa', '/feed.xml']
</script>

{#each hiddenUrls as href}
  <a class="hide" {href}>hidden</a>
{/each}
