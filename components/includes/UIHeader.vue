<template>
  <nav class="z-50 fixed top-0 p-4 sm:p-6 select-none flex flex-col md:flex-row md:items-stretch items-center w-full">
    <NuxtLink class="target flex items-center" :to="{name: 'index'}">
      <img class="text-target rounded-full w-10 h-10" :src="this.$colorMode.value === 'dark' ? '/logoW.webp' : '/icon.png'" alt="Logo">
    </NuxtLink>
    <div class="inline-flex items-stretch flex-no-shrink justify-end ml-0 md:ml-auto">
      <div class="relative target text-xs flex items-center box-border">
        <NuxtLink :to="{name: 'index'}" class="uppercase text-grayCustom hover:bg-grey-dark hover:opacity-75 dark:text-white text-target relative select-none">Accueil</NuxtLink>
      </div>
      <div class="relative target text-xs flex items-center mx-10 md:mx-20 box-border">
        <NuxtLink :to="{name: 'projects'}" :class="{'font-bold': projectPage}" class="uppercase text-grayCustom hover:bg-grey-dark hover:opacity-75 dark:text-white text-target relative select-none">Projets</NuxtLink>
      </div>
      <div class="relative target text-xs flex items-center box-border">
        <NuxtLink :to="{name: 'about'}" class="uppercase text-grayCustom hover:bg-grey-dark hover:opacity-75 dark:text-white text-target relative select-none">à&nbsp;propos</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        projectPage: false
      }
    },
    watch: {
      $route() {
        this.projectPage = this.$route.name === 'projects-slug'
      }
    }
  }
</script>
