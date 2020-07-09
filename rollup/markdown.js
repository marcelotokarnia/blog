import showdownHighlight from 'showdown-highlight'
import { createFilter } from 'rollup-pluginutils'
import path from 'path'
import matter from 'gray-matter'
import showdown from 'showdown'

const converter = new showdown.Converter({
  metadata: true,
  extensions: [showdownHighlight],
})

converter.setFlavor('github')

export default (options = {}) => {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'rollup-plugin-markdown',
    transform(code, id) {
      if (!filter(id) === -1) return

      const extension = path.extname(id)

      if (extension !== '.md') return

      const matterResult = matter(code)
      const html = converter.makeHtml(matterResult.content)

      const exportFromModule = JSON.stringify({
        html,
        metadata: matterResult.data,
        filename: path.basename(id),
        path: id,
      })

      return {
        code: `export default ${exportFromModule}`,
        map: { mappings: '' },
      }
    },
  }
}
