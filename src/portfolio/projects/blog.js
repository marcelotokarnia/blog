import { blog } from '../assets/projects'

export default {
  title: 'Personal Blog',
  text: `This blog was built with Sapper, server side rendering tool for Svelte,
    an interesting, cool, new frontend framework I'm experimenting on lately.
    The intent of having a blog is writing about technically interesting problems and solutions I've faced on the other personal projects I work on.`,
  textMore: `Of course all the above is still true, in the end this project is more of an excuse to use this new cool tool I just heard about, Sapper.
    I'm totally stocked by the potentials of it, even though I still faced a few issues with tooling in general, like using Typescript or HTML pre compilers,
    since it's still quite a young framework, those details shall be fixed with time. But overall, I had a very good experience with this framework. 👏🏻`,
  images: blog,
  tags: [
    'Javascript',
    'Typescript',
    'Svelte',
    'Sapper',
    'Markdown',
    'Server Side Rendering',
    'Rollup',
  ],
  repo: 'https://github.com/marcelotokarnia/blog',
  link: 'https://marcelo.tokarnia.tech/',
}
