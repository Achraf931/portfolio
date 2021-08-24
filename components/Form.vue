<template>
  <section class="bg-grayCustom mt-32 p-6 md:p-10 lg:p-20 dark:bg-dark">
    <div class="text-center mb-10 md:text-left">
      <h2 v-observe="{ onEnter: visibility, once: true }"
          class="is-visible text-xl md:text-3xl mb-3 dark:text-white">
        Une idée&nbsp;? Un projet&nbsp;?<br>
        N'hésitez pas à m'envoyer un message&nbsp;!
      </h2>
    </div>

    <form v-observe="{ onEnter: visibility, once: true }" @submit.prevent="sendMail"
          method="post" class="is-visible max-w-screen-md" novalidate>
      <div class="flex flex-col md:flex-row justify-between">
        <div v-observe="{ onEnter: visibility, once: true }"
             :class="{ formGroupError: $v.form.name.$error }"
             class="is-visible flex items-start mb-5 mr-8 flex-col w-full md:w-1/2">
          <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="name">Nom</label>
          <input
            v-model.trim="form.name" @value="setName"
            class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white"
            type="text" inputmode="text" id="name" placeholder="Entrer votre nom">
        </div>
        <div v-observe="{ onEnter: visibility, once: true }"
             :class="{ formGroupError: $v.form.email.$error }"
             class="is-visible flex items-start mb-5 flex-col w-full md:w-1/2">
          <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="email">Email</label>
          <input
            v-model.trim="form.email" @value="setEmail"
            class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-4 dark:bg-black dark:text-white"
            type="email" inputmode="email" id="email" placeholder="Entrer votre email">
        </div>
      </div>

      <div v-observe="{ onEnter: visibility, once: true }"
           :class="{ formGroupError: $v.form.message.$error }"
           class="is-visible flex items-start mb-5 flex-col w-full">
        <label class="uppercase text-xs mb-3 font-medium dark:text-white" for="message">Message</label>
        <textarea
          v-model="form.message" @value="setMessage"
          class="outline-none w-full focus:outline-black dark:focus:outline-grayCustom p-5 text-sm h-56 resize-none dark:bg-black dark:text-white"
          inputmode="text" id="message" placeholder="Entrer votre message"></textarea>
      </div>

      <button v-observe="{ onEnter: visibility, once: true }"
              ref="button"
              class="transition-all duration-150 ease-in-out is-visible uppercase w-full py-3 px-6 text-xs text-white bg-black outline-none sm:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black"
              type="submit">{{ button }}
      </button>
    </form>
  </section>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, email, maxLength} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      button: 'Envoyer',
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email,
        maxLength: maxLength(320)
      },
      message: {
        required
      }
    }
  },
  methods: {
    setName(value) {
      this.form.name = value
      this.$v.form.name.$touch()
    },
    setEmail(value) {
      this.form.email = value
      this.$v.form.email.$touch()
    },
    setMessage(value) {
      this.form.message = value
      this.$v.form.message.$touch()
    },
    sendMail() {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        this.$store.dispatch('sendEmail', this.form)
        this.$v.$reset()
        this.form = ''
        this.button = 'Envoyé !'
        this.$refs.button.style.backgroundColor = 'green'
        this.$refs.button.style.color = 'white'
        setTimeout(() => {
          this.button = 'Envoyer'
          this.$refs.button.style.removeProperty('background-color')
          this.$refs.button.style.removeProperty('color')
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
  .formGroupError > input, .formGroupError > textarea {
    border: 1px solid red;
  }
</style>
