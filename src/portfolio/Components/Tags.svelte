<script>
  import { take } from 'ramda'
  export let tags
  let tagsShown = take(5, tags)
</script>

<div class="mb2">
  {#each tagsShown as tag}
    <span class="ttu grow br-pill ma1 pa2 dib black bg-light-gray">{tag}</span>
  {/each}
  {#if tagsShown.length != tags.length}
    <span
      on:click={() => (tagsShown = tags)}
      class="ttu grow br-pill ma1 pa2 dib black bg-light-gray pointer"
    >
      +{tags.length - tagsShown.length}
    </span>
  {/if}
</div>

<style>
  .mb2 {
    font-size: 10px;
  }
</style>
