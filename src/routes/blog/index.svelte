<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => ({ posts }))
  }
</script>

<script>
  export let posts
  const dateFormater = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
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
  <title>Blog posts</title>
</svelte:head>

<h1>Most recent blog posts</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="blog/{post.slug}">
        <span>{dateFormater.format(post.date)}: {post.title}</span>
        <p class="summary">{post.summary}</p>
      </a>
    </li>
  {/each}
</ul>
