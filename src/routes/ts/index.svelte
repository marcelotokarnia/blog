<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`ts.json`)
      .then(r => r.json())
      .then(posts => ({ posts }))
  }
</script>

<script>
  export let posts
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  .summary {
    padding-left: 2rem;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<svelte:head>
  <title>TS Cheatsheet</title>
</svelte:head>

<h1>TS Cheatsheet</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="ts/{post.slug}">
        <span>{post.title}</span>
        <p class="summary">{post.summary}</p>
      </a>
    </li>
  {/each}
</ul>
