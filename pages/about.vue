<template>
  <div class="dark:bg-black min-h-screen">
    <section class="flex flex-col max-w-screen-xl justify-between text-center lg:text-left mt-24 mx-auto lg:flex-row">
      <div class="flex flex-col justify-center">
        <p v-observe="{ onEnter: visibility, once: true }" class="is-visible-left uppercase font-medium text-xs mb-3 tracking-wide opacity-50 dark:text-white">Hey there!</p>
        <h2 v-observe="{ onEnter: visibility, once: true }" class="is-visible-left text-2xl font-bold mb-5 dark:text-white">Je suis Hamrouni Charfeddine</h2>
        <p v-observe="{ onEnter: visibility, once: true }" class="is-visible-left opacity-50 w-4/5 mx-auto lg:mx-0 lg:w-auto dark:text-white">
          Développeur web fullstack et graphiste de 24 ans.
          <br>
          <br>
          Depuis tout petit, je suis passionné par l’univers de l’informatique que ce soit du graphisme, du développement ou même de la réparation de mobile et leurs fonctionnement.
          <br>
          <br>
          Je suis très motivé et cherche constamment à améliorer mes compétences.
          <br>
          <br>
          J’ai effectué une année d’infographie pour pouvoir être à l'aise avec les logiciels de graphismes et ensuite un Bachelor en développement web fullstack et mobile chez Webstart.
        </p>
      </div>
      <img v-observe="{ onEnter: visibility, once: true }" class="is-visible-right lg:max-w-screen-sm w-full mt-10 lg:mt-0 lg:ml-10" src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbeef9bd53280d68f98a0e_about-pic.svg" alt="Me">
    </section>

    <div class="flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto">
      <section class="md:w-1/2 w-full text-center lg:text-left mt-24 mx-auto">
        <h2 v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible text-2xl md:text-4xl text-black font-bold mb-10 dark:text-white">Mes expériences</h2>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible mb-10">
          <h3 class="text-black mb-2 dark:text-white">15/10/2020 - 14/10/2021</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">Sylphe <span class="text-xs text-black dark:text-white">(Paris 75013)</span></h3>
          <p class="text-black mb-2 dark:text-white">Alternance en developpement des sites en utilisant les frameworks NuxtJS et Laravel.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible mb-10">
          <h3 class="text-black mb-2 dark:text-white">15/10/2019 - 14/10/2020</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">Key-Performance-Group <span class="text-xs text-black dark:text-white">(Paris 75001)</span></h3>
          <p class="text-black mb-2 dark:text-white">Alternance en développement de sites jeux en PHP et Javascript natifs sans framework.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible">
          <h3 class="text-black mb-2 dark:text-white">01/03/2019 - 01/06/2019</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">The-webdev <span class="text-xs text-black dark:text-white">(Télétravail)</span></h3>
          <p class="text-black mb-2 dark:text-white">Réalisation de maquettes, développement du site à partir de maquettes en télétravail.</p>
        </div>
      </section>

      <section class="md:w-1/2 w-full text-center text-left lg:text-right mt-24 mx-auto">
        <h2 v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible text-2xl md:text-4xl text-black font-bold mb-10 dark:text-white">Mes formations</h2>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible mb-10">
          <h3 class="text-black mb-2 dark:text-white">2018 - 2021</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">Webstart <span class="text-xs text-black dark:text-white">(Paris 75011)</span></h3>
          <p class="text-black mb-2 dark:text-white">Formation de développeur web et mobile d'une durée de trois ans.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible mb-10">
          <h3 class="text-black mb-2 dark:text-white">2015 - 2016</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">Itecom Art Design <span class="text-xs text-black dark:text-white">(Paris 75001)</span></h3>
          <p class="text-black mb-2 dark:text-white">Formation d'infographie d'une durée d'un an.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible">
          <h3 class="text-black mb-2 dark:text-white">2012 - 2015</h3>
          <h3 class="text-black mb-2 dark:text-white font-bold">Lycée Alfred Costes <span class="text-xs text-black dark:text-white">(Bobigny 93000)</span></h3>
          <p class="text-black mb-2 dark:text-white">Baccalauréat Professionnel d'une durée de trois ans.</p>
        </div>
      </section>
    </div>

    <section class="max-w-screen-xl text-center lg:text-left mt-24 mx-auto">
      <h2 v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible text-2xl md:text-4xl text-black font-bold mb-2 dark:text-white">Personnalité</h2>

      <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div class="transform transition-all duration-150 ease-in-out rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
          <h3 class="text-black mb-2 dark:text-white font-bold">Ponctuel</h3>
          <p class="text-center text-black mb-2 dark:text-white">Pour réaliser différents projets, j'ai besoin de délais différents, mais dans tous les cas je respecte les délais.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible transform transition-all duration-150 ease-in-out rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
          <h3 class="text-black mb-2 dark:text-white font-bold">Précis</h3>
          <p class="text-center text-black mb-2 dark:text-white">Comme on le sait, le diable est dans les détails. J'utilise toute mon expérience et mes compétences pour donner la meilleure solution à chaque tâche.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible transform transition-all duration-150 ease-in-out rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
          <h3 class="text-black mb-2 dark:text-white font-bold">Haute qualité</h3>
          <p class="text-center text-black mb-2 dark:text-white">Je cherche constamment à améliorer mes compétences pour vous donner les meilleures idées dans les meilleurs délais.</p>
        </div>

        <div v-observe="{ onEnter: visibility, threshold: 1, once: true }" class="is-visible transform transition-all duration-150 ease-in-out rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
          <h3 class="text-black mb-2 dark:text-white font-bold">Fiable</h3>
          <p class="text-center text-black mb-2 dark:text-white">Ma réputation est très importante pour moi. Je suis toujours responsable de mon travail, vous pouvez donc pleinement me faire confiance.</p>
        </div>
      </div>
    </section>

    <Form/>
  </div>
</template>

<script>
  import transition from "~/mixins/transition";

  export default {
    head() {
      return {
        title: 'About',
        titleTemplate: null
      }
    },
    mixins: [transition]
  }
</script>
