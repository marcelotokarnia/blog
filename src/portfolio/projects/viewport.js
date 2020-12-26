import { viewport } from '../assets/projects'

export default {
  title: 'Viewport',
  text: `This was another interview task I had to fetch data about ports and vessels from an api
  And organize them in a nice way. Each vessel contained information about logs on ETA over time, 
  so it was possible to calculate the average delay based on number of days before arrival.
  Each also contained information about unloading time in their port stops, so that could be gathered in a port overview.`,
  textMore: `To summarize it was also possible to display number of arrivals on each port and rank ports by "most popular",
  All this information was plotted using some smooth graph animations by D3 integrated with React/Redux/Typescript`,
  images: viewport,
  tags: ['React', 'D3', 'Data', 'Redux', 'Typescript'],
  repo: 'https://github.com/marcelotokarnia/viewport',
  link: 'https://viewport.tokks.tech/',
}
