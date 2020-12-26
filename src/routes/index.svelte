<script lang="typescript">
  import LinkedinBadge from '@components/LinkedinBadge.svelte'
  import Github from '@components/GithubButton.svelte'
  import Tag from '@components/Tag.svelte'
  export let title: string = 'Marcelo Tokarnia'
  const profileSource: string =
    'https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_500,w_500,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>Marcelo Tokarnia</h1>

<figure>
  <img alt="Marcelo Tokarnia" src={profileSource} />
</figure>

<div>
  <p>Minimalist, focused, result-driven.</p>
  <p>I like to run, code, and everything in between.</p>
</div>

<div class="split">
  <div>
    <p class="padded-content">👩🏻‍💻👨🏻‍💻 Coding 🖥💻</p>
    <LinkedinBadge className="padded-content" />
    <Github text="My public Matrix" className="padded-content" />
    <div class="padded-content split">
      <a target="_blank" href="https://resume.tokks.tech" rel="noopener noreferrer">
        <Tag name="📕 Skills & Experiences" size="large" />
      </a>
      <a href="/portfolio" rel="noopener noreferrer">
        <Tag name="🔨 Spare time Projects" size="large" />
      </a>
    </div>
  </div>
  <div>
    <p class="padded-content">🏃🏻‍♂️ Running 🏃🏻‍♀️</p>
    <iframe
      title="latest strava activities"
      height="454"
      width="300"
      frameborder="0"
      allowtransparency="true"
      scrolling="no"
      src="https://www.strava.com/athletes/12209995/latest-rides/fa8aa37314adf693c33151a66d57b464aa53d412"
    />
  </div>
</div>

<style>
  h1,
  figure,
  p {
    text-align: center;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  .split {
    display: flex;
  }

  .split > div,
  .split > a {
    flex: 1;
    text-align: center;
  }

  :global(.LI-badge-container) {
    text-align: initial;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
