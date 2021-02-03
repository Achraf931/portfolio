<template>
  <div>
    <section class="mt-24 mb-32">
      <p class="text-xl text-center leading-8 md:text-left dark:text-white">Hamrouni Charfeddine</p>
      <p class="opacity-50 text-center md:text-left dark:text-white">Développeur web</p>

      <h1 class="mt-3 text-2xl md:text-4xl text-center md:text-left md:text-5xl lg:text-6xl leading:10 lg:leading-20 dark:text-white">Hey there! Je suis un graphiste et développeur web très créatif basé à Paris.</h1>
    </section>

    <section class="mb-20">
      <div class="flex flex-no-grow flex-no-shrink mb-16 flex-col sm:flex-row">
        <article class="w-full mb-20 sm:mb-0 sm:w-3/5 mr-8 flex items-center flex-col">
          <NuxtLink class="block h-460 mb-10" :to="{name: 'project'}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg" alt="Image Projet">
          </NuxtLink>
          <NuxtLink :to="{name: 'project'}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Projet 1</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Passy Plaza</p>
        </article>

        <article class="w-full sm:w-2/5 flex items-center flex-col">
          <NuxtLink class="block h-460 mb-10" :to="{name: 'project'}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg" alt="Image Projet">
          </NuxtLink>
          <NuxtLink :to="{name: 'project'}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Projet 2</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Mairie de Montreuil</p>
        </article>
      </div>

      <div class="flex flex-no-grow flex-no-shrink flex-col sm:flex-row">
        <article class="w-full mb-20 sm:mb-0 sm:w-2/5 mr-8 flex items-center flex-col">
          <NuxtLink class="block h-460 mb-10" :to="{name: 'project'}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg" alt="Image Projet">
          </NuxtLink>
          <NuxtLink :to="{name: 'project'}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Projet 3</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Passy Plaza</p>
        </article>

        <article class="w-full sm:w-3/5 flex items-center flex-col">
          <NuxtLink class="block h-460 mb-10" :to="{name: 'project'}">
            <img class="object-cover h-full w-full hover:opacity-75" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg" alt="Image Projet">
          </NuxtLink>
          <NuxtLink :to="{name: 'project'}" class="inline-block text-base md:text-xl leading-8 mb-1 text-center hover:opacity-75 dark:text-white">Projet 4</NuxtLink>
          <p class="opacity-50 text-center dark:text-white">Mairie de Montreuil</p>
        </article>
      </div>
    </section>

    <section class="text-center md:text-left">
      <h2 class="text-2xl md:text-4xl text-black mb-2 dark:text-white">Mes expériences</h2>
      <p class="opacity-50 max-w-screen-md dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
      </p>
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
    components: {
      Form
    }
  }
</script>
