
import { h } from 'hyperapp'

const Bar = args =>
  h('div', { class: 'bar' }, [
    h('div', { class: 'bar-inner' }, [
      h('img', { src: 'images/logo.png' })
    ])
  ])

export default Bar