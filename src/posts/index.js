import posts from './*.md'

const parsedPosts = posts
  .map(({ metadata, filename, html }) => ({
    ...metadata,
    slug: filename.replace(/\.md$/, ''),
    date: new Date(metadata.date),
    tags: metadata.tags ? metadata.tags.split(',') : [],
    html,
  }))
  .sort(({ date: a }, { date: b }) => b - a)

export default parsedPosts
