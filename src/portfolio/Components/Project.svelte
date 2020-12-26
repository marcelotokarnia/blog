<script>
  import RotatingImages from './RotatingImages.svelte'
  import GithubSource from './GithubSource.svelte'
  import Tags from './Tags.svelte'
  import { cond, equals, always, T } from 'ramda'
  let readMore = false

  export let title
  export let size
  export let images
  export let text
  export let tags
  export let repo
  export let link
  export let textMore

  const getClasses = cond([
    [equals('big'), always('col-md-6 pt6')],
    [equals('medium'), always('col-md-3 col-sm-6 pt6')],
    [T, always('col-md-4 col-sm-6 pt6')],
  ])
</script>

<div class={getClasses(size)}>
  <button class="cursor-auto w-100 overflow-hidden db relative project-thumbnail-post__link">
    <RotatingImages {title} {images} />
    <a
      class="db bg-black-30 hover-bg-black-60 bg-animate white pv3 ph4 ba b--white absolute
      project-thumbnail__btn"
      href={link}
    >
      See it live
    </a>
  </button>
  <div class="flex mb2">
    <div class="flex-auto">
      <h1 class="b">{title}</h1>
      <Tags {tags} />
    </div>
    <GithubSource {repo} />
  </div>

  <div>
    {#each text.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
  {#if !readMore}
    <button
      class="f5 link grow dim ba ph4 b--black bg-white pv2 mb2 dib black absolute
      project-readmore__btn"
      on:click={() => (readMore = true)}
    >
      Read more ...
    </button>
    <hr />
  {:else}
    <hr />
    {#each textMore.split('\n') as line}
      <p>{line}</p>
    {/each}
    <button
      class="f5 link grow dim ba ph4 b--black bg-white pv2 mb2 dib black absolute
      project-readmore__btn"
      on:click={() => (readMore = false)}
    >
      Collapse back
    </button>
    <hr />
  {/if}
</div>

<style>
  a:visited {
    color: white;
  }
  a:hover {
    color: white;
  }
  .col-md-4 .project-thumbnail-post__link {
    height: 260px;
  }

  .col-md-6 {
    width: 50%;
    position: relative;
    min-height: 1px;
    padding: 15px;
  }

  .col-md-4 {
    width: 33.3%;
    position: relative;
    min-height: 1px;
    padding: 15px;
  }

  .col-md-3 {
    width: 25%;
    position: relative;
    min-height: 1px;
    padding: 15px;
  }

  @media (max-width: 985px) {
    .col-md-6 {
      width: 100%;
    }
    .col-sm-6 {
      width: 50%;
    }
    .col-md-6 .project-thumbnail-post__link {
      height: 400px;
    }
    .col-md-4 {
      width: 100%;
    }
    .col-md-4 .project-thumbnail-post__link {
      height: 290px;
    }
    .col-md-3 {
      width: 100%;
    }
    .col-md-3 .project-thumbnail-post__link {
      height: 220px;
    }
  }

  @media (max-width: 761px) {
    .col-md-6 {
      width: 100%;
    }
    .col-md-6 .project-thumbnail-post__link {
      height: 200px;
    }
    .col-md-4 {
      width: 33.3%;
    }
    .col-md-4 .project-thumbnail-post__link {
      height: 200px;
    }
    .col-md-3 {
      width: 25%;
    }
    .col-md-3 .project-thumbnail-post__link {
      height: 185px;
    }
  }

  .col-md-6 .project-thumbnail-post__link {
    height: 320px;
  }

  .col-md-3 .project-thumbnail-post__link {
    height: 167px;
  }

  .project-thumbnail__btn {
    top: calc(50% - 19px);
    left: calc(50% - 51.5px);
  }

  .project-readmore__btn {
    left: calc(50% - 51.5px);
  }
  button:focus {
    outline: none;
  }

  .cursor-auto {
    cursor: auto;
  }
</style>
