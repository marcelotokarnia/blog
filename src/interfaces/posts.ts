export type Post = {
  hidden?: boolean
  title: string
  summary: string
  author: string
  authorPic: string
  slug: string
  date: Date
  tags: Array<string>
  html: string
}
