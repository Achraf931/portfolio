<template>
  <div class="dark:bg-black">
    <UIHeader/>
    <main class="px-4 sm:px-6 pt-20">
      <Nuxt/>
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
