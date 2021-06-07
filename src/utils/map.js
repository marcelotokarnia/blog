import mapbox from '@mapbox/polyline'

const tryDecode = polyline => (polyline ? mapbox.decode(polyline) : [])

export const decodePath = polyline => {
  if (Array.isArray(polyline)) {
    return polyline
  }
  console.log(polyline)
  console.log(tryDecode(polyline))
  return tryDecode(polyline).map(([lat, lng]) => ({ lat, lng }))
}
