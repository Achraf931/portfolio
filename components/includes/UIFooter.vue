<template>
  <footer class="px-3 py-6 md:px-6 relative select-none bg-white flex flex-col md:flex-row items-center w-full dark:bg-black">
    <p class="text-grayCustom text-xs flex items-center uppercase opacity-5 dark:text-white">Merci pour votre visite&nbsp;!</p>
    <div class="flex items-center flex-no-shrink flex-grow justify-end m-auto mt-6 md:mt-0 md:ml-auto">
      <a href="http://linkedin.com/in/charfeddine-hamrouni-72387110b" target="_blank" rel="noreferrer noopener" class="inline-flex text-xs uppercase items-center opacity-50 ml-2 hover:opacity-100 dark:text-white dark:hover:opacity-50">Linkedin</a>
      <a href="https://www.facebook.com/profile.php?id=100010741451876" target="_blank" rel="noreferrer noopener" class="inline-flex text-xs uppercase items-center opacity-50 ml-2 hover:opacity-100 dark:text-white dark:hover:opacity-50">Facebook</a>
      <a href="https://www.instagram.com/achraf_uzumaki" target="_blank" rel="noreferrer noopener" class="inline-flex text-xs uppercase items-center opacity-50 ml-2 hover:opacity-100 dark:text-white dark:hover:opacity-50">Instagram</a>
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
