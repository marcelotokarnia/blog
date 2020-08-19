<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`ts/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import 'highlight.js/styles/vs.css'
  import Tag from '@components/Tag.svelte'
  import Github from '@components/GithubIcon.svelte'
  import KoFi from '@components/KoFi.svelte'
  export let post
  const dateFormater = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
</script>

<style>
  .author-pic {
    width: 100%;
    max-width: 50px;
    flex: 1;
    padding: 0 0.75rem 0 0;
  }

  .vertical-flex {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .vertical-flex span {
    flex: 1;
  }
  .content {
    padding: 0.75rem 0;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  footer {
    padding: 0.5rem 0 3rem;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .flex {
    display: flex;
  }

  .card-button {
    transition: background-color 0.15s ease-in-out;
    text-align: center;
    text-decoration: none;
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #111;
    color: #f4f4f4;
    align-items: center;
    display: inline-flex;
    border-radius: 0.25rem;
    border-style: none;
    border-width: 0;
  }

  .card-content {
    font-size: 0.875rem;
    margin-left: 1rem;
    padding-right: 0.5rem;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

{#each post.tags as tag}
  <Tag name={tag} />
{/each}

<div class="content">
  {@html post.html}
</div>

<footer>
  <div class="fl flex">
    <KoFi />
    <a
      class="card-button"
      href="https://github.com/marcelotokarnia/blog/edit/master/src/tsposts/{post.slug}.md">
      <Github />
      <span class="card-content">Edit this page</span>
    </a>
  </div>
  <div class="fr flex">
    <img class="author-pic" alt={post.author} src={post.authorPic} />
    <span class="vertical-flex">
      <span>{dateFormater.format(new Date(post.date))}</span>
      <span>{post.author}</span>
    </span>
  </div>

</footer>
