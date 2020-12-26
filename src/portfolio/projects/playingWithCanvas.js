import { playingWithCanvas } from '../assets/projects'

export default {
  title: 'Playing with Canvas',
  text: `This is a simple geometry app using CreateReactApp to plot some geometrical forms on a canvas.
    Each click on the canvas will update one of the three point references in a cyclic order (P0, P1, P2, P0, P1...). Each point is highlighted with a red circle.
    After P0, P1 and P2 are set, the app calculates P3 so that, P0-P1-P2-P3 forms a parallelogram, which is ploted in blue.
    Also it plots a yellow circle, which has the same area and centre of mass as the parallelogram.`,
  textMore: `Red circle, blue parallelogram and yellow circle are updated within each click.
    RESET CANVAS button erases all point references (and derived shapes).
    SHAPES DETAILS tab displays updated X (from left to right) and Y (from top to bottom) coordinates (in an ordered pair (x, y)) of each point, as well as the centre of mass and area (both the same for both shapes).
    ABOUT THE APP tab displays these same instructions and information about myself 🤓`,
  images: playingWithCanvas,
  tags: ['React', 'Canvas', 'Redux', 'Stylus'],
  repo: 'https://github.com/marcelotokarnia/playing-with-canvas',
  link: 'https://canvas.tokks.tech/',
}
