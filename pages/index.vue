<template>
  <div class="min-h-screen">
    <section class="mt-24 mb-32 w-4/5 mx-auto">
      <p v-observe-visibility="{ callback: this.visibilityChanged, once: true }" class="is-visible text-xl text-center leading-8 md:text-left dark:text-white">Hamrouni Charfeddine</p>
      <p v-observe-visibility="{ callback: this.visibilityChanged, once: true }" class="is-visible opacity-50 text-center md:text-left dark:text-white">Développeur web</p>

      <h1 v-observe-visibility="{ callback: this.visibilityChanged, once: true }" class="is-visible mt-3 text-2xl md:text-4xl text-center md:text-left md:text-5xl lg:text-6xl leading:10 lg:leading-20 dark:text-white">Hey there! Je suis un développeur web et graphiste très créatif basé à Paris.</h1>
    </section>

    <section v-observe-visibility="{ callback: this.visibilityChanged, once: true }" class="is-visible mb-20">
      <div class="flex flex-no-grow flex-no-shrink mb-16 flex-col sm:flex-row">
        <article v-observe-visibility="{ callback: this.visibilityLeft, once: true }" class="is-visible-left w-full mb-20 sm:mb-0 sm:w-3/5 mr-8 flex items-center flex-col">
          <NuxtLink class="block w-full h-460 mb-10" :to="{name: 'projects-slug', params: {slug: 'passy-plaza'}}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://www.passyplaza.fr/passy-plaza.webp" alt="Passy Plaza">
          </NuxtLink>
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'passy-plaza'}}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Nouveau site Passy Plaza</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Passy Plaza</p>
        </article>

        <article v-observe-visibility="{ callback: this.visibilityRight, once: true }" class="is-visible-right w-full sm:w-2/5 flex items-center flex-col">
          <NuxtLink class="block w-full h-460 mb-10" :to="{name: 'projects-slug', params: {slug: 'sneakizy'}}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://res.cloudinary.com/hyp1x6w5j/image/upload/v1593189235/logo2_kagvfm.jpg" alt="Sneakizy">
          </NuxtLink>
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'sneakizy'}}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">E-commerce de sneakers</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Projet d'école</p>
        </article>
      </div>

      <div class="flex flex-no-grow flex-no-shrink flex-col sm:flex-row">
        <article v-observe-visibility="{ callback: this.visibilityLeft, once: true }" class="is-visible-left w-full mb-20 sm:mb-0 sm:w-2/5 mr-8 flex items-center flex-col">
          <NuxtLink class="block w-full h-460 mb-10" :to="{name: 'projects-slug', params: {slug: 'tasks-manager'}}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" alt="Tasks Manager">
          </NuxtLink>
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'tasks-manager'}}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Gestionnaire de tâches</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Projet d'école</p>
        </article>

        <article v-observe-visibility="{ callback: this.visibilityRight, once: true }" class="is-visible-right w-full sm:w-3/5 flex items-center flex-col">
          <NuxtLink class="block w-full h-460 mb-10" :to="{name: 'projects-slug', params: {slug: 'weather-app'}}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://images.unsplash.com/photo-1597132825820-094d481f1c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Weather App">
          </NuxtLink>
          <NuxtLink :to="{name: 'projects-slug', params: {slug: 'weather-app'}}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Weather App</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Projet d'école</p>
        </article>
      </div>
    </section>
    <Form/>
  </div>
</template>

<script>
  import Form from "@/components/Form";

  export default {
    head() {
      return {
        title: 'Accueil',
        titleTemplate: null
      }
    },
    /*async asyncData({ app, params }) {
      let projects
      await app.$axios.get('/projects')
        .then(item => {
          if (item.data.length === 0) throw({ statusCode: 404, message: 'Projets introuvable !' })
          return projects = item.data
        })
      return {projects}
    },*/
    components: {
      Form
    }
  }
</script>
