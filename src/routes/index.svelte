<script lang="typescript">
  export let title: string = 'Marcelo Tokarnia'
  const profileSource: string =
    'https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_500,w_500,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg'
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
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

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>Marcelo Tokarnia</h1>

<figure>
  <img alt="Marcelo Tokarnia" src={profileSource} />
  <figcaption>👆🏻I'm that guy ☝🏻</figcaption>
</figure>

<p>
  Currently React/Node Engineer
  <a target="_blank" href="https://www.klarna.com">@Klarna</a>
  🇸🇪
</p>

<p>
  <a target="_blank" href="https://resume.tokks.tech">Resume</a>
  ・
  <a target="_blank" href="https://projects.tokks.tech">Portfolio</a>
  ・
  <a target="_blank" href="https://www.github.com/marcelotokarnia">Github</a>
  ・
  <a target="_blank" href="https://www.linkedin.com/in/marcelo-tokarnia-5a1ab2128/">Linkedin</a>
</p>

<p>
  This website's content is all in
  <a href="https://www.github.com/marcelotokarnia/blog">PUBLIC</a>
  and any contribution is appreciated.
</p>
