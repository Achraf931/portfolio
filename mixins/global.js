export default {
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        this.$gsap.to(entry.target, {
          y: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityTop(isVisible, entry) {
      if (isVisible) {
        this.$gsap.to(entry.target, {
          y: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityLeft(isVisible, entry) {
      if (isVisible) {
        this.$gsap.to(entry.target, {
          x: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityRight(isVisible, entry) {
      if (isVisible) {
        this.$gsap.to(entry.target, {
          x: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    }
  }
}
