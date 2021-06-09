<script context="module">
  import { assocPath, pathOr, append } from 'ramda'
  export function preload({ params, query }) {
    return this.fetch(`coding-blog.json`)
      .then(r => r.json())
      .then(posts => {
        const postsGroup = posts.reduce((acc, post) => {
          const dt = new Date(post.date)
          const month = dt.getMonth()
          const year = dt.getFullYear()
          return assocPath([year, month], append(post, pathOr([], [year, month], acc)), acc)
        }, {})
        return { postsGroup }
      })
  }
</script>

<script>
  import Meta from '../../components/Meta.svelte'
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  export let postsGroup
</script>

<Meta title="Coding Blog" />

<h1>Most recent blog posts</h1>

<ul>
  {#each Object.keys(postsGroup).sort((a, b) => b - a) as year}
    {#each Object.keys(postsGroup[year]).sort((a, b) => b - a) as month}
      <h2>{year} - {monthNames[month]}</h2>
      {#each postsGroup[year][month] as post}
        <li>
          <a rel="prefetch" href="coding-blog/{post.slug}">
            <span class="title">{post.title}</span>
            <p class="summary">{post.summary}</p>
          </a>
        </li>
      {/each}
    {/each}
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  li {
    display: block;
    padding-left: 2rem;
  }
  .title {
    color: white;
    font-size: 1.25rem;
  }
  .summary {
    padding-left: 2rem;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
