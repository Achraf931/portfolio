<template>
  <section class="bg-grayCustom mt-32 p-6 md:p-10 lg:p-20 dark:bg-dark">
    <div class="text-center mb-10 md:text-left">
      <h2 class="text-xl md:text-3xl mb-3 dark:text-white">
        Une idée ? Un Projet ?<br>
        N'hésitez pas à m'envoyer un message !
      </h2>
      <p class="opacity-50 dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <form @submit.prevent="sendForm" method="post" class="max-w-screen-md">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex items-start mb-5 mr-8 flex-col w-full md:w-1/2">
          <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="name">Nom</label>
          <input class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white" type="text" inputmode="text" id="name" placeholder="Entrer votre nom">
        </div>
        <div class="flex items-start mb-5 flex-col w-full md:w-1/2">
          <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="email">Email</label>
          <input class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white" type="email" inputmode="email" id="email" placeholder="Entrer votre email">
        </div>
      </div>

      <div class="flex items-start mb-5 flex-col w-full">
        <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="message">Message</label>
        <textarea class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-56 resize-none dark:bg-black dark:text-white" inputmode="text" id="message" placeholder="Entrer votre message"></textarea>
      </div>

      <button class="uppercase w-full py-3 px-6 text-xs text-white bg-black outline-none sm:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black" type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
  export default {
    methods: {
      sendForm(e) {
        console.log(e)
      }
    }
  }
</script>
