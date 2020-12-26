import { revues } from '../assets/projects'

export default {
  title: 'ReVue',
  text: `No, it's not about the Revue dance, it's a Review application made with Vue 🤦🏻‍♂️.
    This is a simple project, done in a few days for an application back in 2018.
    It's a graphql API to write reviews / ratings, with user interface to list user specific reviews.`,
  textMore: `Frontend: Vue (powered by Wotan Linter and Typescript) and bundled with Webpack.
    Backend: Python and Django (powered by Graphene Graphql API).
    Authentication with JWT tokens and styling with Bootstrap.`,
  images: revues,
  tags: ['Graphene', 'Django', 'JWT', 'Vue', 'Webpack', 'Python', 'Bootstrap', 'PostgreSQL'],
  repo: 'https://bitbucket.org/marcelotokarnia/revues',
  link: 'https://www.youtube.com/watch?v=1ijx3dyC5HE',
}
