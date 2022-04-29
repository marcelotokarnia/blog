let memcache

import getPaths from '../../travel-xp/torres-del-paine/paths'

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  if (!memcache || process.env.NODE_ENV === 'development') {
    memcache = processPaths(getPaths())
  }

  res.end(JSON.stringify({ paths: memcache }))
}

const processPaths = paths => paths
