import posts from '@posts'

const contents = JSON.stringify(
  posts.map(post => ({
    ...post,
    date: +post.date,
  }))
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(contents)
}
