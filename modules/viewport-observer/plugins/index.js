import Vue from 'vue'

const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>')

// Plugin
const state = Vue.observable({
  active: false
})

export default (_, inject) => {
  inject('viewportObserverState', state)
}

// Helper
let helper = null

if (moduleOptions.helper) {
  helper = Vue.observable({
    active: true
  })

  window.addEventListener('keydown', ({ keyCode }) => {
    if (keyCode === 73) {
      helper.active = !helper.active
    }
  })
}

class Observer {
  constructor (el, options) {
    this.el = el
    this.isIntersecting = false

    this.bindMethods()
    this.createObserver(options)
  }

  bindMethods () {
    this.handleIntersect = this.handleIntersect.bind(this)
  }

  createObserver (options = {}) {
    if (this.observer) {
      this.destroyObserver()
    }

    this.options = Object.assign({}, {
      ...moduleOptions.directiveOptions
    }, options)

    this.observer = new IntersectionObserver(
      this.handleIntersect,
      {
        root: null,
        rootMargin: `0px 0px ${-this.options.offset}px 0px`,
        threshold: this.options.threshold
      }
    )
  }

  observe () {
    this.observer?.observe(this.el)
  }

  unobserve () {
    this.observer.unobserve(this.el)
  }

  handleIntersect (entries) {
    let entry = entries[0]

    // Fix bug multiple entries
    if (entries.length > 1) {
      const intersectingEntry = entries.find(e => e.isIntersecting)
      if (intersectingEntry) {
        entry = intersectingEntry
      }
    }

    const isIntersecting = entry.isIntersecting && entry.intersectionRatio >= this.options.threshold

    if (isIntersecting === this.isIntersecting) return

    if (isIntersecting) {
      this.onEnter({ entry })

      if (this.options.once) {
        this.unobserve()
      }
    } else {
      this.onLeave({ entry })
    }
  }

  onEnter ({ entry }) {
    this.isIntersecting = true

    this.addClass()

    this.options?.onChange?.({
      el: this.el,
      options: this.options,
      observer: this.observer,
      entry,
      isVisible: this.isVisible
    })

    this.options?.onEnter?.({
      el: this.el,
      options: this.options,
      observer: this.observer,
      entry
    })
  }

  addClass () {
    this.el.classList.add(this.options.activeClass)
  }

  removeClass () {
    this.el.classList.remove(this.options.activeClass)
  }

  onLeave ({ entry }) {
    this.isIntersecting = false

    this.options?.onChange?.({
      el: this.el,
      options: this.options,
      observer: this.observer,
      entry,
      isVisible: this.isVisible
    })

    this.options?.onLeave?.({
      el: this.el,
      options: this.options,
      entry,
      observer: this.observer
    })
  }

  destroyObserver () {
    this.observer?.disconnect()
    this.observer = null
  }
}

function bind (el, { value }, vnode) {
  const state = new Observer(el, value)

  const cb = _ => {
    if (vnode.context.$viewportObserverState.active) {
      state.observe()
    }
  }

  vnode.context.$watch(_ => vnode.context.$viewportObserverState.active, cb)

  if (moduleOptions.helper) {
    vnode.context.$watch(_ => helper?.active, _ => {
      if (!state.isIntersecting) return

      if (helper.active) {
        state.addClass()
      } else {
        state.removeClass()
      }
    })
  }

  cb()

  el._vue_visibilityState = state
}

function update (el, { value }, vnode) {
  const state = el._vue_visibilityState

  if (state) {
    const equal = Object.keys(value || {})
      .every(k => {
        return (value[k] === state.options[k])
      })

    if (!equal) {
      state.createObserver(value)
      if (vnode.context.$viewportObserverState.active) {
        state.observe()
      }
    }

    if (state.isIntersecting) {
      state.addClass()
    }
  } else {
    bind(el, { value })
  }
}

function unbind (el) {
  const state = el._vue_visibilityState

  if (state) {
    state.destroyObserver()
    delete el._vue_visibilityState
  }
}

Vue.directive('observe', {
  bind,
  update,
  unbind
})
