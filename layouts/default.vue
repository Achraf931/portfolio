<template>
  <div class="dark:bg-black">
    <UIHeader/>
    <main class="px-4 sm:px-6 pt-20 relative">
      <Nuxt/>
      <transition  name="slide-fade" mode="out-in">
        <div ref="notif" v-if="$nuxt.isOffline" role="alert" class="customWidth mx-4 sm:mx-6 mb-6 z-10 text-sm flex items-center justify-between fixed px-4 py-3 leading-normal text-red-100 bg-red-700 font-medium rounded right-0 bottom-0">
          Vous n'êtes plus connecté à internet.
          <svg @click="closeNotif" class="ml-3 w-4 h-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="white" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg>
        </div>
      </transition>
    </main>
    <UIFooter/>
  </div>
</template>

<script>
import UIHeader from '~/components/includes/UIHeader'
import UIFooter from '~/components/includes/UIFooter'

export default {
  components: {
    UIHeader,
    UIFooter
  },
  methods: {
    closeNotif() {
      this.$refs.notif.style.opacity = '0'
      setTimeout(() => {
        this.$refs.notif.remove()
      }, 200)
    }
  }
};
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  transition-duration: .2s;
  color: #1a1b1f;
}

::selection {
  color: white;
  background-color: #1a1b1f;
}

.customWidth {
  width: calc(100% - 30px);
}

@media all and (min-width: 480px) {
  .customWidth {
    width: unset;
  }
}
</style>
