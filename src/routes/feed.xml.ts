import posts from '@posts'
import RSS from 'rss-generator'

const feed = new RSS({
  title: `Marcelo Tokarnia's Blog`,
  description: `This is where I write tales of bravery and determination, successes and failures of my hard journeys on the virtual world of 0's and 1's`,
  feed_url: `https://marcelo.tokks.tech/feed.xml`,
  site_url: `https://marcelo.tokks.tech`,
  pubDate: posts[0].date.toISOString(),
})

posts.slice(0, 5).forEach(p =>
  feed.item({
    title: p.title,
    description: p.summary,
    url: `https://marcelo.tokks.tech/coding-blog/${p.slug}`,
    guid: p.slug,
    categories: p.tags,
    author: p.author,
    date: +p.date,
  })
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/xml',
  })

  res.end(feed.xml({ indent: true }))
}
