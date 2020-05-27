import posts from '@posts'

const lookup = new Map()
posts.forEach(post => {
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
        ? JSON.stringify(posts.find(({ slug: postSlug }) => postSlug === slug))
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
