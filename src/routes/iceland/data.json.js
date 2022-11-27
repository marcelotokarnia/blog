let memcache

import getPaths from '../../travel-xp/iceland/paths'
// import stravaApi from '@tokks/strava'
// import { path } from 'ramda'
// import fs from 'fs'

export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  if (!memcache || process.env.NODE_ENV === 'development') {
    // const { access_token } = (
    //   await stravaApi({ timeout: 1500 }).Auth.refresh({
    //     body: { refresh_token: process.env.STRAVA_REFRESH_TOKEN },
    //   })
    // ).data()

    // const stravaIds = [
    //   7594308348, 7594308674, 7594309171, 7596197992, 7596198290, 7600342932, 7600344220,
    //   7605937041, 7605937462, 7605937664, 7605938016, 7605939349, 7605939728, 7605939867,
    //   7605940115, 7610083653, 7610084855, 7611071763, 7611072045, 7611471425, 7614666942,
    //   7616642661, 7616644585, 7616646061, 7616815781, 7617050430, 7616644413, 7617240554,
    //   7617646734, 7621406149, 7621407260, 7621408062, 7621408570, 7621409630, 7621661085,
    //   7622661593, 7625982648, 7626358455, 7627417739, 7627418381, 7627418438, 7627324666,
    //   7627622619, 7628052448, 7628052724, 7628052876, 7631929066, 7631929962, 7631930123,
    //   7636645719,
    // ]

    // const tap = e => {
    //   console.log(e)
    //   return e
    // }

    // const stravaData = (
    //   await Promise.all(
    //     stravaIds.map(id =>
    //       stravaApi({ access_token, timeout: 1500 }).Activities.getActivityById({
    //         id,
    //       })
    //     )
    //   )
    // )
    //   .map(e => tap(e).data())
    //   .map(e => ({
    //     path: path(['map', 'polyline'], e),
    //     name: path(['name'], e),
    //     position: { lat: path(['start_latlng', 0], e), lng: path(['start_latlng', 1], e) },
    //     type: 'Hike',
    //     distance: path(['distance'], e),
    //     elapsed_time: path(['elapsed_time'], e),
    //     total_elevation: path(['total_elevation'], e),
    //     thumbnail: path(['photos', 'primary', 'urls', '600'], e),
    //   }))

    // fs.writeFileSync(
    //   '/Users/mtok/Downloads/stravaIceland.txt',
    //   `[${stravaData.map(e => JSON.stringify(e, null, 4)).join(',')}]`
    // )

    memcache = { paths: getPaths() }
  }

  res.end(JSON.stringify(memcache))
}
