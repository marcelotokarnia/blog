<script>
  const hiddenUrls = [
    '/travel-xp',
    '/travel-xp/floripa',
    '/travel-xp/chapada-dos-veadeiros',
    '/torres-del-paine',
    '/feed.xml',
  ]
</script>

{#each hiddenUrls as href}
  <a class="hide" {href}>hidden</a>
{/each}
