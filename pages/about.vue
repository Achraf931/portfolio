<template>
  <div class="dark:bg-black">
    <section class="flex flex-col max-w-screen-xl justify-between text-center lg:text-left mt-24 mx-auto lg:flex-row">
      <div class="flex flex-col justify-center">
        <p class="uppercase font-medium text-xs mb-3 tracking-wide opacity-50 dark:text-white">Hey there!</p>
        <h2 class="text-2xl mb-5 dark:text-white">Je suis Hamrouni Charfeddine</h2>
        <p class="opacity-50 w-4/5 mx-auto lg:mx-0 lg:w-auto dark:text-white">
          I’m a web and graphic designer based in San Francisco, CA. I’m originally from Brooklyn, NY and will forever talk about the superiority of New York pizza and bagels. I like to build for the web and make things pretty.
        </p>
      </div>
      <img class="lg:max-w-screen-sm w-full mt-10 lg:mt-0 lg:ml-10" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbeef9bd53280d68f98a0e_about-pic.svg" alt="Me">
    </section>

    <Form/>
  </div>
</template>

<script>
  import Form from "@/components/Form";

  export default {
    head() {
      return {
        title: 'About',
        titleTemplate: null
      }
    },
    components: {
      Form
    }
  }
</script>
