import { djangoNews } from '../assets/projects'

export default {
  title: 'Django News',
  text: `In case you think the template is similar from this very website, you are totally correct.
    I refurbished this django-news into this portfolio when studying Svelte.
    But Django-News actually have a backend attached to it, so you can log in, filter your selection (and save your preferred selection) for reading the news.`,
  textMore: `As the mentioned tags already describe a bit too briefly:
    This application is based on bootstrap and tachyons for styling (and custom style by Stylus preprocessor),
    And Django powered by Django Rest Framework on the backend.
    The frontend logic and presentation was constructed using React and all the state management uses Redux.
    This is the one and only project, even though small, I put effort on the presentation side, 
    I usually prefer to skip this and jump straight to the logic challenges, 
    but with this one I learned a bunch about bootstrap, open graph, stylus ... It was a fun project.`,
  images: djangoNews,
  tags: [
    'Django Rest Framework',
    'Django',
    'Python',
    'React',
    'Webpack',
    'Bootstrap',
    'Stylus',
    'Tachyons',
    'PostgreSQL',
    'Jest',
    'Redux',
  ],
  repo: 'https://github.com/marcelotokarnia/django-news/',
  link: 'http://news.tokarnia.tech',
}
