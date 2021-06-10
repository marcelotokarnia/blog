import mapbox from '@mapbox/polyline'

const tryDecode = polyline => (polyline ? mapbox.decode(polyline) : [])

export const poly2array = polyline => {
  if (Array.isArray(polyline)) {
    return polyline
  }
  return tryDecode(polyline).map(([lat, lng]) => ({ lat, lng }))
}

export const gpx2array = (gpx, { crops = [] } = { crops: [] }) => {
  let parsedGpx = gpx.gpx.trk.trkseg.trkpt.map(
    ({ _attributes: { lat, lon }, ele: { _text: ele }, time: { _text: time } }) => ({
      lat,
      lng: lon,
      ele,
      time,
    })
  )
  crops
    .map(({ from = parsedGpx[0].time, to = parsedGpx.slice(-1)[0].time }) => ({
      from: +new Date(from),
      to: +new Date(to),
    }))
    .forEach(({ from, to }) => {
      parsedGpx = parsedGpx.filter(({ time }) => {
        const dt = +new Date(time)
        if (from <= dt && to >= dt) {
          return false
        }
        return true
      })
    })
  return parsedGpx
}

export const array2poly = arr => mapbox.encode(arr.map(({ lat, lng }) => [lat, lng]))
