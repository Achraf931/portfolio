export default {
  methods: {
    visibility(entry) {
      if (entry.entry.isIntersecting) {
        this.$gsap.to(entry.entry.target, {
          y: 0,
          x: 0,
          delay: .2,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power4.out'
        })
      }
    }
  }
}
