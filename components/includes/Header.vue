<template>
  <nav class="z-50 fixed top-0 p-4 sm:p-6 select-none bg-white flex items-stretch w-full dark:bg-black">
    <NuxtLink :to="{name: 'index'}">
      <img class="rounded-full w-10 h-10" :src="this.$colorMode.value === 'dark' ? '/logo.png' : '/logoW.png'" alt="Logo">
    </NuxtLink>
    <div class="inline-flex items-stretch flex-no-shrink flex-grow justify-end ml-auto">
      <NuxtLink :to="{name: 'index'}" class="py-2 px-4 text-xs flex items-center uppercase text-grayCustom hover:bg-grey-dark dark:text-white">Home</NuxtLink>
      <NuxtLink :to="{name: 'about'}" class="py-2 px-4 text-xs flex items-center uppercase text-grayCustom hover:bg-grey-dark dark:text-white">About</NuxtLink>
    </div>
  </nav>
</template>
