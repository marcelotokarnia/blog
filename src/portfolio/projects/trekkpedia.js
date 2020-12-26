import { trekkpedia } from '../assets/projects'

export default {
  title: 'Trekkpedia',
  text: `The main idea behind this project was to experiment on Vue Framework.
    But it grew way bigger than that, I started experimenting on state management with Apollo Link State, 
    linting with Wotan and even automated blue-green deploys on EC2 instances using docker images generated from the project.
    It's a simple project, it shows the mountains around you, and tells you how far they are from your position and how high they are.`,
  textMore: `I learned a lot from this project, how to deal with GDAL and Postgis for georeferenced databases and operations on it.
    How to store, alter and retrieve Docker instances and how to leverage on those to develop and deploy.
    I learned a lot about Apollo Link State, which to be honest was not my favorite state manager but still very rewarding to answer a few questions about it on StackOverflow, since not a lot of people were using it back then.
    Also it was my first Graphene implementation for a Graphql API on a Django Backend, I must say I still prefer Apollo's Node implementation, but any kind of knowledge broadens your potential, it was still worth it.
    I'm biased to express my opinions about Node anyways 😆`,
  images: trekkpedia,
  tags: [
    'Vue',
    'Docker',
    'AWS',
    'Postgis',
    'Bootstrap',
    'Typescript',
    'Stylus',
    'Graphql',
    'Graphene',
    'Apollo Link State',
    'Webpack',
    'Django',
    'Python',
  ],
  repo: 'https://github.com/marcelotokarnia/mountains-catalog',
  link: 'https://mountain-catalog.herokuapp.com/',
}
