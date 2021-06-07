<script>
  export let title
  export let href
</script>

<div>
  {#if href}
    <a {href}>{title}</a>
  {:else}
    {title}
  {/if}
</div>

<style>
  div {
    color: black;
  }
</style>
