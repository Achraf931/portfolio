<template>
  <div class="dark:bg-black">
    <section class="mt-24 mb-32 w-4/5 mx-auto">
      <h2 class="text-4xl md:text-5xl lg:text-6xl text-center md:text-left dark:text-white">Projet 1</h2>
      <p class="opacity-50 text-center md:text-left dark:text-white">Passy Plaza</p>

      <div class="flex flex-col text-center mt-20 md:text-left md:flex-row md:justify-between">
        <div class="w-full md:w-2/3">
          <h2 class="mb-4 text-xl text-center md:text-left dark:text-white">Project Overview</h2>
          <p class="opacity-50 text-center md:text-left dark:text-white">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
        <div class="w-full flex items-center md:items-end justify-end md:w-1/3 ml-0 md:ml-4">
          <a href="#" class="mt-20 mx-auto xs:ml-auto text-center uppercase py-3 px-6 text-xs text-white bg-black outline-none hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Voir le site</a>
        </div>
      </div>
    </section>

    <img class="w-full" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececded4a04d627de84c_portfolio%204%20-%20wide.svg" alt="Image projet">


    <section class="w-full mt-24 flex flex-col justify-between xs:flex-row">
      <NuxtLink :to="{name: 'projects-slug', params: {slug: 'test1'}}" class="uppercase text-center w-full py-3 px-6 text-xs text-white bg-black outline-none xs:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Projet précédent</NuxtLink>
      <NuxtLink :to="{name: 'projects-slug', params: {slug: 'test1'}}" class="mt-3 xs:mt-0 text-center uppercase w-full py-3 px-6 text-xs text-white bg-black outline-none xs:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Projet suivant</NuxtLink>
    </section>
  </div>
</template>

<script>
import Form from "@/components/Form";

export default {
  head() {
    return {
      title: 'Projet',
      titleTemplate: null
    }
  },
  components: {
    Form
  }
}
</script>
