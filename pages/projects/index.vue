<template>
  <div class="mb-10 min-h-screen">
    <h1 v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible-top mt-20 mb-10 text-4xl md:text-5xl lg:text-6xl text-center md:text-left dark:text-white">Projets</h1>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <client-only>
        <vue-aspect-ratio v-observe="{ onEnter: visibility, threshold: 1, once: true }" ar="16:9" class="is-visible w-full bg-black dark:bg-dark relative project">
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'passy-plaza'}}">
            <img height="460" width="920" class="object-cover w-full h-full" src="https://www.passyplaza.fr/passy-plaza.webp" alt="Passy Plaza">
            <div class="absolute top-0 left-0 w-full h-full bg-black title-container transition-all duration-150 ease-in-out flex items-center justify-center" style="background: rgba(0, 0, 0, 0.7)">
              <h2 class="text-white font-black text-center leading-none" style="font-size: 3rem">Nouveau site Passy Plaza</h2>
            </div>
          </NuxtLink>
        </vue-aspect-ratio>
        <vue-aspect-ratio v-observe="{ onEnter: visibility, threshold: 1, once: true }" ar="16:9" class="is-visible w-full bg-black dark:bg-dark relative project">
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'sneakizy'}}">
            <img height="460" width="920" class="object-cover w-full h-full" src="https://res.cloudinary.com/hyp1x6w5j/image/upload/v1593189235/logo2_kagvfm.jpg" alt="Sneakizy">
            <div class="absolute top-0 left-0 w-full h-full bg-black title-container transition-all duration-150 ease-in-out flex items-center justify-center" style="background: rgba(0, 0, 0, 0.7)">
              <h2 class="text-white font-black text-center leading-none" style="font-size: 3rem">E-commerce de sneakers</h2>
            </div>
          </NuxtLink>
        </vue-aspect-ratio>
        <vue-aspect-ratio v-observe="{ onEnter: visibility, threshold: 1, once: true }" ar="16:9" class="is-visible w-full bg-black dark:bg-dark relative project">
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'tasks-manager'}}">
            <img height="460" width="920" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="Tasks Manager">
            <div class="absolute top-0 left-0 w-full h-full bg-black title-container transition-all duration-150 ease-in-out flex items-center justify-center" style="background: rgba(0, 0, 0, 0.7)">
              <h2 class="text-white font-black text-center leading-none" style="font-size: 3rem">Gestionnaire de tâches</h2>
            </div>
          </NuxtLink>
        </vue-aspect-ratio>
        <vue-aspect-ratio v-observe="{ onEnter: visibility, threshold: 1, once: true }" ar="16:9" class="is-visible w-full bg-black dark:bg-dark relative project">
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'weather-app'}}">
            <img height="460" width="920" class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1597132825820-094d481f1c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Weather App">
            <div class="absolute top-0 left-0 w-full h-full bg-black title-container transition-all duration-150 ease-in-out flex items-center justify-center" style="background: rgba(0, 0, 0, 0.7)">
              <h2 class="text-white font-black text-center leading-none" style="font-size: 3rem">Weather App</h2>
            </div>
          </NuxtLink>
        </vue-aspect-ratio>
      </client-only>
    </section>
  </div>
</template>

<script>
import transition from "@/mixins/transition";

  export default {
    data() {
      return {
        projects: []
      }
    },
    mixins: [transition],
    mounted() {
      /*this.$axios.get('/projects')
        .then(item => {
          if (item.data.length === 0) throw({ statusCode: 404, message: 'Projets introuvable !' })
          this.projects = item.data
        })*/
    }
  }
</script>

<style scoped>
  .title-container {
    opacity: 0;
  }

  .project:hover .title-container {
    opacity: 1;
  }
</style>
