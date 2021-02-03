<template>
  <div class="dark:bg-black">
    <UIHeader/>
    <main class="px-4 sm:px-6 pt-20 relative">
      <Nuxt/>
      <transition name="slide-fade" mode="out-in">
        <div v-if="$nuxt.isOffline" role="alert" class="mr-6 mb-6 z-10 text-sm fixed px-4 py-3 leading-normal text-red-100 bg-red-700 font-medium rounded right-0 bottom-0">
          Vous n'êtes plus connecté à internet.
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
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
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
</style>
