import posts from './*.md'
import { Post } from '../interfaces/posts'

const parsedPosts: Array<Post> = posts
  .map(({ metadata, filename, html }) => ({
    ...metadata,
    slug: filename.replace(/\.md$/, ''),
    date: new Date(metadata.date),
    tags: metadata.tags ? metadata.tags.split(',') : [],
    html,
  }))
  .sort(({ date: a }, { date: b }) => b.getTime() - a.getTime())

export default parsedPosts
