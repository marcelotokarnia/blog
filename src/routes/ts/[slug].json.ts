import tips from '@tstips'

const lookup = new Map()
tips.forEach(post => {
  lookup.set(post.slug, JSON.stringify(post))
})

export function get(req, res) {
  const { slug } = req.params

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })
    const post =
      process.env.NODE_ENV === 'development'
        ? JSON.stringify(tips.find(({ slug: tipSlug }) => tipSlug === slug))
        : lookup.get(slug)

    res.end(post)
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}
