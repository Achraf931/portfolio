<template>
  <footer class="p-6 relative select-none bg-white flex items-center items-stretch w-full dark:bg-black">
    <p class="text-grayCustom text-xs flex items-center uppercase opacity-5 dark:text-white">Merci pour votre visite !</p>
    <div class="flex items-center flex-no-shrink flex-grow justify-end ml-auto">
      <button @click="toggle" class="border justify-between w-24 items-center inline-flex bg-black text-white border-black px-3 outline-none focus:outline-none rounded-full hover:opacity-75 dark:bg-white dark:text-black">
        <template v-if="this.$colorMode.value === 'dark'">
          <p class="m-auto font-semibold text-black text-sm">Light</p>
        </template>
        <template v-else>
          <p class="m-auto text-white font-semibold text-sm">Dark</p>
        </template>
      </button>
      <a href="http://linkedin.com/in/charfeddine-hamrouni-72387110b" target="_blank" rel="noreferrer noopener" class="inline-flex px-4 text-xs uppercase items-center opacity-50 hover:opacity-100 dark:text-white dark:hover:opacity-50">Linkedin</a>
      <a href="https://www.facebook.com/profile.php?id=100010741451876" target="_blank" rel="noreferrer noopener" class="inline-flex px-4 text-xs uppercase items-center opacity-50 hover:opacity-100 dark:text-white dark:hover:opacity-50">Facebook</a>
      <a href="https://www.instagram.com/achraf_uzumaki" target="_blank" rel="noreferrer noopener" class="inline-flex px-4 text-xs uppercase items-center opacity-50 hover:opacity-100 dark:text-white dark:hover:opacity-50">Instagram</a>
    </div>
  </footer>
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
