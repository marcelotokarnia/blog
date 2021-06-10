import { gpx2array, array2poly } from '../../../utils/map'
import ContornoLagoa from './ContornoLagoa.xml'
import CavernaPantanoLagoinhaLeste from './CavernaPantanoLagoinhaLeste.xml'
import LagoinhaLesteChuva from './LagoinhaLesteChuva.xml'
import ZerandoLagoinhaLeste from './ZerandoLagoinhaLeste.xml'

export default () => [
  {
    path: array2poly(gpx2array(ContornoLagoa)),
    name: 'Contorno da Lagoa',
  },
  {
    path: array2poly(
      gpx2array(ZerandoLagoinhaLeste, {
        crops: [{ to: '2021-05-30T13:41:13Z' }, { from: '2021-05-30T15:32:40Z' }],
      })
    ),
    name: 'Morro do Matadeiro',
  },
  {
    path: array2poly(
      gpx2array(ZerandoLagoinhaLeste, {
        crops: [
          { to: '2021-05-30T17:15:42Z' },
          { from: '2021-05-30T17:27:39Z', to: '2021-05-30T17:46:00Z' },
          { from: '2021-05-30T17:58:48Z', to: '2021-05-30T18:08:20Z' },
          { from: '2021-05-30T18:14:34Z' },
        ],
      })
    ),
    name: 'Morro do Pântano alternativa',
  },
  {
    path: array2poly(
      gpx2array(ZerandoLagoinhaLeste, {
        crops: [
          { to: '2021-05-30T11:56:46Z' },
          { from: '2021-05-30T12:07:15Z', to: '2021-05-30T12:25:57Z' },
          { from: '2021-05-30T12:40:42Z' },
        ],
      })
    ),
    name: 'Morro do Pântano',
  },
  {
    path: array2poly(
      gpx2array(ZerandoLagoinhaLeste, {
        crops: [{ to: '2021-05-30T20:05:55Z' }, { from: '2021-05-30T20:34:37Z' }],
      })
    ),
    name: 'Atalho Morro da Coroa',
  },
  {
    path: array2poly(
      gpx2array(ZerandoLagoinhaLeste, {
        crops: [
          { to: '2021-05-30T18:25:43Z' },
          { from: '2021-05-30T19:16:12Z', to: '2021-05-30T19:29:49Z' },
          { from: '2021-05-30T19:35:26Z', to: '2021-05-30T19:43:45Z' },
          { from: '2021-05-30T20:05:50Z' },
        ],
      })
    ),
    name: 'Ponta da Felicidade',
  },
  {
    path: array2poly(
      gpx2array(LagoinhaLesteChuva, {
        crops: [
          { to: '2021-05-09T15:46:32Z' },
          { from: '2021-05-09T15:48:52Z', to: '2021-05-09T15:49:58Z' },
          { from: '2021-05-09T16:04:23Z', to: '2021-05-09T16:21:36Z' },
          { from: '2021-05-09T16:25:21Z' },
        ],
      })
    ),
    name: 'Praia',
  },
  {
    path: array2poly(
      gpx2array(LagoinhaLesteChuva, {
        crops: [{ to: '2021-05-09T16:25:21Z' }, { from: '2021-05-09T18:46:30Z' }],
      })
    ),
    name: 'Trilha do Matadeiro',
  },
  {
    path: array2poly(
      gpx2array(CavernaPantanoLagoinhaLeste, {
        crops: [{ to: '2021-04-25T16:07:45Z' }, { from: '2021-04-25T17:30:45Z' }],
      })
    ),
    name: 'Morro da Coroa',
  },
  {
    path: array2poly(
      gpx2array(CavernaPantanoLagoinhaLeste, {
        crops: [{ to: '2021-04-25T15:16:07Z' }, { from: '2021-04-25T16:07:07Z' }],
      })
    ),
    name: 'Trilha do Pântano do Sul',
  },
]
