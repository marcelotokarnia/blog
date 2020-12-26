import { apartments } from '../assets/projects'

export default {
  title: 'Apartments Viewing',
  text: `This is the biggest problem I solved for an interview process,
  It's a full blown apartment search, there are intermediate loading states, infinite scroll, image carrousels,
  multiple api endpoints, reproducible search by url, image resizing on the server side`,
  textMore: `I took the opportunity from this problem to challenge myself to learn React Suspense in the process,
  and also learn React Visibility Sensor for the infinite scroll.
  I hope you enjoy the end result (and no, it's not responsive, I don't like frontend 😂)`,
  images: apartments,
  tags: ['Javascript', 'Typescript', 'Infinite Scrool', 'Suspense', 'Jest', 'Redux'],
  repo: 'https://github.com/marcelotokarnia/apartments',
  link: 'https://apartments.tokks.tech/',
}
