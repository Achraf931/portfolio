<template>
  <div>
    <section class="h-screen p-2 md:p-6 lg:p-10 bg-white">
      <div class="bg-black w-full items-center justify-center flex flex-col h-full">
        <h1 class="text-white text-center text-4xl md:text-5xl lg:text-6xl capitalize">Page introuvable</h1>
        <p class="text-white text-center lg:text-xl opacity-50">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <NuxtLink class="text-black uppercase bg-white text-sm py-5 px-8 mt-8 hover:opacity-75" :to="{name: 'index'}">retourner à l'accueil</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'custom',
  head() {
    return {
      title: '404',
      titleTemplate: null
    }
  },
}
</script>
