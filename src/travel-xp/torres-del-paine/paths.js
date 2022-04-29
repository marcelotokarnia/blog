import { gpx2array, array2poly } from '../../utils/map'
import dia1 from './dia1.xml'
import dia2 from './dia2.xml'
import dia3 from './dia3.xml'
import dia4 from './dia4.xml'
import dia5 from './dia5.xml'
import dia6 from './dia6.xml'
import dia7 from './dia7.xml'

export default () => [
  {
    path: array2poly(gpx2array(dia1)),
    name: 'Dia 1 - Central -> Serón',
    link: 'https://www.strava.com/activities/6916038437',
  },
  {
    path: array2poly(gpx2array(dia2)),
    name: 'Dia 2 - Serón -> Dickson',
    link: 'https://www.strava.com/activities/6916041441',
  },
  {
    path: array2poly(gpx2array(dia3)),
    name: 'Dia 3 - Dickson -> Los Perros',
    link: 'https://www.strava.com/activities/6916043582',
  },
  {
    path: array2poly(gpx2array(dia4)),
    name: 'Dia 4 - Los Perros -> Grey',
    link: 'https://www.strava.com/activities/6916048521',
  },
  {
    path: array2poly(gpx2array(dia5)),
    name: 'Dia 5 - Grey -> Francés',
    link: 'https://www.strava.com/activities/6916052811',
  },
  {
    path: array2poly(gpx2array(dia6)),
    name: 'Dia 6 - Francés -> Mirador Britânico -> Chileno',
    link: 'https://www.strava.com/activities/6916059916',
  },
  {
    path: array2poly(gpx2array(dia7)),
    name: 'Dia 7 - Chileno -> Mirador Las Torres -> Central',
    link: 'https://www.strava.com/activities/6916063046',
  },
]
