<template>
  <div class="dark:bg-black">
    <section class="mt-3">
      <p class="dark:text-white">Project Page</p>
    </section>

    <Form/>
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
