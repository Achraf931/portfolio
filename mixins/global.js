export default {
  methods: {
    visibilityChanged(isVisible) {
      const items = this.$gsap.utils.toArray('.is-visible');

      if (isVisible) {
        this.$gsap.to(items, {
          y: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityTop(isVisible) {
      const items = this.$gsap.utils.toArray('.is-visible-top');

      if (isVisible) {
        this.$gsap.to(items, {
          y: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityLeft(isVisible) {
      const items = this.$gsap.utils.toArray('.is-visible-left');

      if (isVisible) {
        this.$gsap.to(items, {
          x: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    },
    visibilityRight(isVisible) {
      const items = this.$gsap.utils.toArray('.is-visible-right');

      if (isVisible) {
        this.$gsap.to(items, {
          x: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power4.out'
        })
      }
    }
  }
}
