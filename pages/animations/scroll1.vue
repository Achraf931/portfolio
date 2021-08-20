<template>
  <div id="container">
    <div id="pink-block" class="panel w-full h-screen bg-pink-300"></div>
    <section ref="section" class="section relative panel w-full overflow-x-scroll h-screen flex">
      <div class="fromRight w-full min-w-full h-screen bg-blue-100"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-200"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-300"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-400"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-500"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-600"></div>
      <div class="fromRight w-full min-w-full h-screen bg-blue-700"></div>
    </section>
    <div id="red-block" class="w-full min-h-screen h-screen bg-red-400"></div>
  </div>
</template>

<script>
  export default {
    mounted() {
      let section = document.querySelector('.section')
      let sections = this.$gsap.utils.toArray(".fromRight");

      let tl1 = this.$gsap.timeline({
        defaults: {
          delay: 0.1
        },
        scrollTrigger: {
          trigger: section,
          pin: section,
          start: 'top top',
          end: '+=3000',
          scrub: 0.2
        }
      })

      tl1.to(section, {scale: 0, duration: 2})
    }
  }
</script>

<style>
.fromRight {
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw !important;
  height: 100%;
}
</style>
