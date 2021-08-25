export default {
    transition(to, from) {
      return {
        appear: true,
        enter(el, done) {
          const tl = this.$gsap
            .timeline({ onComplete: done })
            .call(() => {
              window.scrollTo(0, 0)
            })
            if (from) {
              tl
                .fromTo('.loader', {
                  y: '0%'
                },
                {
                  y: '-100%',
                  duration: 0.6,
                  ease: 'power2.in'
                })
            }
            tl.call(() => {
              this.$viewportObserverState.active = true
            }, null, 0.3)
        },
        leave(el, done) {
          this.$gsap
            .timeline({ onComplete: done })
            .fromTo('.loader', {
                y: '120%'
              },
              {
                y: '0%',
                duration: 0.6,
                ease: 'power2.out'
              })
          this.$viewportObserverState.active = false
        },
      }
    }
}
