<template>
  <div class="dark:bg-black parent">
    <Loader/>
    <div class="hidden cursor z-10" id="cursor"></div>
    <IncludesUIHeader/>
    <main data-scroll-container class="px-4 sm:px-6 pt-20 relative z-0">
      <Nuxt/>
      <div ref="notif" v-if="$nuxt.isOffline" role="alert" class="customWidth mx-4 sm:mx-6 mb-6 z-10 text-sm flex items-center justify-between fixed px-4 py-3 leading-normal text-red-100 bg-red-700 font-medium rounded right-0 bottom-0">
        Vous n'êtes plus connecté à internet.
        <svg @click="closeNotif" class="ml-3 w-4 h-4" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="white" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg>
      </div>
    </main>
    <IncludesUIFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import global from "~/mixins/global";
import { gsap } from 'gsap'

/*if (process.client) {
  const LocomotiveScroll = require('locomotive-scroll')
}*/

Vue.mixin(global)

export default {
  beforeMount() {
    //  this.$gsap.set('.parent', { y: -window.pageYOffset })

    console.clear();
    const element = document.querySelector(".cursor");
    const target = document.querySelector(".target");
    const text = document.querySelector(".text-target");
    class Cursor {
      constructor(el, target, text) {
        this.el = el;
        // this.target = target;
        // this.text = text;
        // this.triggerDistance = this.target.getBoundingClientRect().width;
        this.bind();
      }

      bind() {
        document.addEventListener("mousemove", this.move.bind(this), false);
      }

      move(e) {
        const cursorPosition = {
          left: e.clientX,
          top: e.clientY
        };
        document.querySelectorAll(".target").forEach((single) => {
          const triggerDistance = single.getBoundingClientRect().width;

          const targetPosition = {
            left:
              single.getBoundingClientRect().left +
              single.getBoundingClientRect().width / 2,
            top:
              single.getBoundingClientRect().top +
              single.getBoundingClientRect().height / 2
          };
          const distance = {
            x: targetPosition.left - cursorPosition.left,
            y: targetPosition.top - cursorPosition.top
          };

          const angle = Math.atan2(distance.x, distance.y);
          const hypotenuse = Math.sqrt(
            distance.x * distance.x + distance.y * distance.y
          );
          if (hypotenuse < triggerDistance) {
            // Nikhil - look at this code to adjust the round cursor area sizing
            gsap.to(this.el, {
              duration: 0.2,
              left: targetPosition.left - (Math.sin(angle) * hypotenuse) / 2,
              top: targetPosition.top - (Math.cos(angle) * hypotenuse) / 2,
              height: single.clientHeight + 20,
              width: single.clientWidth + 20
            });
            gsap.to(single.querySelector(".text-target"), {
              duration: 0.2,
              x: -((Math.sin(angle) * hypotenuse) / 2),
              y: -((Math.cos(angle) * hypotenuse) / 2)
            });
          } else {
            gsap.to(this.el, {
              duration: 0.2,
              left: cursorPosition.left,
              top: cursorPosition.top,
              height: "12px",
              width: "12px"
            });

            gsap.to(single.querySelector(".text-target"), {
              duration: 0.2,
              x: 0,
              y: 0
            });
          }
        });
      }
    }
    const cursor = new Cursor(element, target);
  },
  methods: {
    closeNotif() {
      this.$refs.notif.style.opacity = '0'
      setTimeout(() => {
        this.$refs.notif.remove()
      }, 200)
    }
  }
};
</script>

<style>
::-webkit-scrollbar {
  display: none!important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .01s;
  transition-delay: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.is-visible {
  opacity: 0;
  transform: translateY(30px);
}

.is-visible-top {
  opacity: 0;
  transform: translateY(-30px);
}

.is-visible-right {
  opacity: 0;
  transform: translateX(30px);
}

.is-visible-left {
  opacity: 0;
  transform: translateX(-30px);
}

.target,
.cursor {
  border-radius: 50px;
  width: 0px;
  height: 0px;
  border: solid 1px #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 10%;
  -webkit-transform: translate(-50%, -50%) rotate(0deg);
  transform: translate(-50%, -50%) rotate(0deg);
}

.target {
  border: none;
  position: relative;
  width: 70px;
  height: 60px;
  left: unset;
  top: unset;
  justify-content: center;
  transform: unset;
}

nav .target:first-child {
  border: none;
  position: unset;
  top: unset;
  left: unset;
  transform: unset;
  margin: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  color: #1a1b1f;
}

::selection {
  color: white;
  background-color: #1a1b1f;
}

.customWidth {
  width: calc(100% - 30px);
}

@media all and (min-width: 480px) {
  .customWidth {
    width: unset;
  }
}

/*! locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
html.has-scroll-smooth {
  overflow: hidden; }

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; }

.has-scroll-smooth body {
  overflow: hidden; }

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh; }

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap; }

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%; }

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0; }
.c-scrollbar:hover {
  transform: scaleX(1.45); }
.c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
  opacity: 1; }
[data-scroll-direction="horizontal"] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1); }
[data-scroll-direction="horizontal"] .c-scrollbar:hover {
  transform: scaleY(1.3); }

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab; }
.has-scroll-dragging .c-scrollbar_thumb {
  cursor: -webkit-grabbing;
  cursor: grabbing; }
[data-scroll-direction="horizontal"] .c-scrollbar_thumb {
  right: auto;
  bottom: 0; }
</style>
