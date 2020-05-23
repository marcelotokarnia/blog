import posts from './*.md'

const parsedPosts = posts
  .map(({ metadata: { title, date, summary }, filename, html }) => ({
    title,
    slug: filename.replace(/\.md$/, ''),
    date: new Date(date),
    summary,
    html,
  }))
  .sort(({ date: a }, { date: b }) => b - a)

export default parsedPosts
