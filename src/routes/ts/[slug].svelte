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
  import Github from '@components/GithubButton.svelte'
  import KoFi from '@components/KoFi.svelte'
  import DisqusComments from '@components/DisqusComments.svelte'
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
    <Github text="Edit this page" path="/blog/edit/master/src/tstips/{post.slug}.md" />
  </div>
  <div class="fr flex">
    <img class="author-pic" alt={post.author} src={post.authorPic} />
    <span class="vertical-flex">
      <span>{dateFormater.format(new Date(post.date))}</span>
      <span>{post.author}</span>
    </span>
  </div>

</footer>

<DisqusComments id={post.slug} />
