<template>
  <nav class="z-50 fixed top-0 p-4 sm:p-6 select-none bg-white flex items-stretch w-full dark:bg-black">
    <NuxtLink :to="{name: 'index'}">
      <img class="rounded-full w-10 h-10" :src="this.$colorMode.value === 'dark' ? '/logoW.webp' : '/logo.webp'" alt="Logo">
    </NuxtLink>
    <div class="inline-flex items-stretch flex-no-shrink flex-grow justify-end ml-auto">
      <NuxtLink :to="{name: 'index'}" class="py-2 px-4 text-xs flex items-center uppercase text-grayCustom hover:bg-grey-dark hover:opacity-75 dark:text-white">Accueil</NuxtLink>
      <NuxtLink :to="{name: 'about'}" class="py-2 px-4 text-xs flex items-center uppercase text-grayCustom hover:bg-grey-dark hover:opacity-75 dark:text-white">à propos</NuxtLink>
    </div>
  </nav>
</template>
