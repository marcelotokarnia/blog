import { bubbles } from '../assets/projects'

export default {
  title: 'The bubbles game',
  text: `When I heard about browsers supporting Javascript modules I saw really big potential in it.
  It was, indeed,  a very liberating experience to see your local changes automatically applied to localhost, no build steps needed.
  This is a simple canvas pure vanilla JS game, written in MJS deployed to a server with no build steps.`,
  textMore: `Unfortunately, apparently VSCode is not very well prepared to handle this MJS thing, I hope more plugins come out soon to support intellisense for example.
  But still, that's one step further in terms of a better code experience, I imagine a world with no more babel / webpack / rollup needed.
  And no build steps required every change (even when dependencies involved, for example with Snowpack).
  And / or faster websites overall due to better served assets with Pika packages for example.
  Who knows what the future holds ? I'm excited about it.`,
  images: bubbles,
  tags: ['Javascript', 'ES6Modules', 'Canvas'],
  repo: 'https://github.com/marcelotokarnia/bubblesGame',
  link: 'https://bubbles.tokks.tech/',
}
