import path from 'path'
import defu from 'defu'

const MODULE_NAME = 'viewport-observer'

export const DEFAULT_OPTIONS = {
  helper: process.env.NODE_ENV === 'development',
  directiveOptions: {
    activeClass: 'in-view',
    threshold: 0,
    offset: 0,
    once: true
  }
}

export default function (moduleOptions) {
  const options = {
    ...defu(moduleOptions, this.options[MODULE_NAME], this.options.viewportObserver, DEFAULT_OPTIONS),
    MODULE_NAME
  }

  this.addPlugin({
    src: path.resolve(__dirname, 'plugins/index.js'),
    fileName: path.join(MODULE_NAME, 'plugins/index.js'),
    options,
    ssr: false
  })
}
