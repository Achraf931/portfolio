<template>
  <div class="min-h-screen">
    <section class="mt-24 mb-32 w-4/5 mx-auto">
      <h2 v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible-top text-4xl md:text-5xl lg:text-6xl text-center md:text-left dark:text-white">{{ project.title }}</h2>
      <p v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible-top opacity-50 text-center md:text-left dark:text-white">{{ project.client }}</p>

      <div class="flex flex-col text-center mt-20 md:text-left md:flex-row md:justify-between">
        <div class="w-full md:w-2/3">
          <p v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible opacity-50 text-center md:text-left dark:text-white">
            {{ project.description }}
          </p>
        </div>
        <div class="w-full flex items-center md:items-end justify-end md:w-1/3 ml-0 md:ml-4">
          <a v-observe="{ onEnter: visibility, threshold: 1, once: true }" :href="project.url" target="_blank" rel="noreferrer noopener" class="is-visible mt-20 mx-auto xs:ml-auto text-center uppercase py-3 px-6 text-xs text-white bg-black outline-none hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Voir le site</a>
        </div>
      </div>
    </section>

    <client-only>
      <vue-aspect-ratio ar="16:9">
        <img v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible w-full h-full object-cover" :src="project.image" :alt="project.title + ' Image'">
      </vue-aspect-ratio>
    </client-only>

    <section class="w-full mt-24 mb-10 flex flex-col justify-between xs:flex-row">
      <NuxtLink v-observe="{ onEnter: visibility, threshold: 1, once: true }" :to="{name: 'projects-slug', params: {slug: project.prev}}" class="is-visible uppercase text-center w-full py-3 px-6 text-xs text-white bg-black outline-none xs:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Projet précédent</NuxtLink>
      <NuxtLink v-observe="{ onEnter: visibility, threshold: 1, once: true }" :to="{name: 'projects-slug', params: {slug: project.next}}" class="is-visible mt-3 xs:mt-0 text-center uppercase w-full py-3 px-6 text-xs text-white bg-black outline-none xs:w-auto hover:opacity-75 focus:outline-none dark:bg-gray-100 dark:text-black">Projet suivant</NuxtLink>
    </section>
  </div>
</template>

<script>
import transition from "@/mixins/transition";

export default {
  mixins: [transition],
  /*async asyncData({ app, params }) {
    let project
    await app.$axios.get('/projects/' + params.slug)
      .then(item => {
        if (item.data.length === 0) throw({ statusCode: 404, message: 'Projet introuvable !' })
        return project = item.data
      })
    return {project}
  },*/
  data() {
    return {
      projects: [
        {
          title: 'Nouveau site Passy Plaza',
          client: 'Passy Plaza',
          description: "Projet réaliser durant mon alternance en entreprise pour le centre commercial Passy Plaza dans le 16ème arrondissement de Paris, ce projet a été développer avec l'aide du framework NuxtJS pour le front et pour le côté back j'ai utilisé Strapi qui est un CMS open-source pour créer des API's et pouvoir éditer ou ajouter du contenu.",
          image: 'https://www.passyplaza.fr/passy-plaza.webp',
          url: 'https://www.passyplaza.fr',
          next: 'sneakizy',
          prev: 'weather-app'
        },
        {
          title: 'E-commerce de sneakers',
          client: "Projet d'école",
          description: "Projet de fin d'année pour valider ma deuxième année en développement web fullstack, ce projet à été développer à l'aide du framework VueJS pour le côté front et le framework Laravel pour développer l'API ainsi que le pannel administrateur.",
          image: 'https://res.cloudinary.com/hyp1x6w5j/image/upload/v1593189235/logo2_kagvfm.jpg',
          url: 'https://sneakizy.herokuapp.com',
          next: 'tasks-manager',
          prev: 'passy-plaza'
        },
        {
          title: 'Gestionnaire de tâches',
          client: "Projet d'école",
          description: "Gestionnaire de tâches développer à l'aide du framework Vuejs en utilisant Firebase pour l'authentification, la base de donnée et de la mise en ligne.",
          image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
          url: 'https://tasks-8860e.web.app',
          next: 'weather-app',
          prev: 'sneakizy'
        },
        {
          title: 'Weather App',
          client: "Projet d'école",
          description: "PWA (Progressive Web App) développer avec les frameworks Ionic et Vuejs en utilisant l'API OpenWeatherMap pour les données météos.",
          image: 'https://images.unsplash.com/photo-1597132825820-094d481f1c4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          url: 'https://weather-3fddc.web.app/',
          next: 'passy-plaza',
          prev: 'tasks-manager'
        }
      ],
      project: ''
    }
  },
  head() {
    return {
      title: this.project.title,
      titleTemplate: null
    }
  },
  beforeMount() {
    this.getData()
  },
  methods: {
    getData() {
      switch (this.$route.params.slug) {
        case 'passy-plaza':
          this.project = this.projects[0];
          break;

        case 'sneakizy':
          this.project = this.projects[1]
          break;

        case 'tasks-manager':
          this.project = this.projects[2]
          break;

        case 'weather-app':
          this.project = this.projects[3]
          break;
      }
    }
  }
}
</script>
