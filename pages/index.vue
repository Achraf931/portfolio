<template>
  <div>
    <section class="mt-24 mb-32">
      <p class="text-xl text-center leading-8 md:text-left dark:text-white">Hamrouni Charfeddine</p>
      <p class="opacity-50 text-center md:text-left dark:text-white">Développeur web</p>

      <h1 class="mt-3 text-4xl text-center md:text-left md:text-5xl lg:text-6xl leading:10 lg:leading-20 dark:text-white">Hey there! Je suis un graphiste et développeur web très créatif basé à Paris.</h1>
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

    <section class="mb-32 text-center md:text-left">
      <h2 class="text-4xl text-black mb-2 dark:text-white">Mes expériences</h2>
      <p class="opacity-50 max-w-screen-md dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
      </p>
    </section>

    <section class="bg-grayCustom p-10 lg:p-20 dark:bg-dark">
      <div class="text-center mb-10 md:text-left">
        <h2 class="text-3xl mb-3 dark:text-white">
          Une idée ? Un Projet ?<br>
          N'hésitez pas à m'envoyer un message !
        </h2>
        <p class="opacity-50 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <form @submit.prevent="sendForm" method="post" class="max-w-screen-md">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="flex items-start mb-5 mr-8 flex-col w-full md:w-1/2">
            <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="name">Nom</label>
            <input class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white" type="text" inputmode="text" id="name" placeholder="Enter votre nom">
          </div>
          <div class="flex items-start mb-5 flex-col w-full md:w-1/2">
            <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="email">Email</label>
            <input class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white" type="email" inputmode="email" id="email" placeholder="Enter votre email">
          </div>
        </div>

        <div class="flex items-start mb-5 flex-col w-full">
          <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="message">Message</label>
          <textarea class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-56 resize-none dark:bg-black dark:text-white" inputmode="text" id="message" placeholder="Enter votre message"></textarea>
        </div>

        <button class="uppercase py-3 px-6 text-xs text-white bg-black outline-none hover:opacity-75 focus:outline-none dark:bg-white dark:text-black" type="submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Accueil',
        titleTemplate: null
      }
    },
    methods: {
      sendForm(e) {
        console.log(e)
      }
    }
  }
</script>
