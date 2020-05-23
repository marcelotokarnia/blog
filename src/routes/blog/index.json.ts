import posts from '@posts'

const dateFormater = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' } as any)

const contents = JSON.stringify(
  posts.map(({ title, slug, date }) => ({
    title,
    slug,
    date: dateFormater.format(date),
  }))
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(contents)
}
