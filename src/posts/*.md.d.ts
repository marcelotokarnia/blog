type PreparsedPost = {
  metadata: {
    title: string
    summary: string
    date: string
    author: string
    authorPic: string
    tags: string
    hidden?: boolean
  }
  filename: string
  html: string
}

declare const posts: Array<PreparsedPost>

export default posts
