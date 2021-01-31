<template>
  <nav class="p-6 relative select-none bg-white lg:flex lg:items-stretch w-full dark:bg-black">
    <NuxtLink :to="{name: 'index'}" class="flex-no-grow flex-no-shrink relative py-2 pr-4 leading-normal text-grayCustom no-underline flex items-center hover:bg-grey-dark dark:text-white">Tailwind</NuxtLink>
    <template>
      <button @click="toggle" class="btn border bg-black text-white uppercase font-semibold text-xs border-black p-1 outline-none focus:outline-none rounded dark:bg-white dark:text-black">Change Theme</button>
    </template>
    <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow lg:justify-end ml-auto">
      <NuxtLink :to="{name: 'index'}" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-xs uppercase text-grayCustom no-underline flex items-center hover:bg-grey-dark dark:text-white">Home</NuxtLink>
      <NuxtLink :to="{name: 'about'}" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-xs uppercase text-grayCustom no-underline flex items-center hover:bg-grey-dark dark:text-white">About</NuxtLink>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      toggle() {
        this.$colorMode.preference = this.$colorMode.value === "light" ? "dark" : "light";
      }
    }
  }
</script>
