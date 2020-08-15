import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import markdown from './rollup/markdown'
import glob from 'rollup-plugin-glob'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup'
import pkg from './package.json'
import autoPreprocess from 'svelte-preprocess'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import alias from 'rollup-plugin-alias'

const srcFolder = `${__dirname}/src`

const aliases = alias({
  resolve: ['.js', '.svelte', '.ts'],
  entries: [
    { find: '@components', replacement: `${srcFolder}/components` },
    { find: '@posts', replacement: `${srcFolder}/posts` },
  ],
})

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

export default {
  client: {
    preserveEntrySignatures: 'strict',
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      aliases,
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        preprocess: autoPreprocess(),
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      typescript(),
      babel({ babelHelpers: 'bundled' }),
      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      aliases,
      markdown(),
      glob(),
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        preprocess: autoPreprocess(),
        generate: 'ssr',
        dev,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      typescript(),
      babel({ babelHelpers: 'bundled' }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
}
