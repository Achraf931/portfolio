<template>
  <div class="dark:bg-black">
    <Header/>
    <main class="px-6">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import Header from '~/components/includes/Header'
export default {
  components: {
    Header
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
