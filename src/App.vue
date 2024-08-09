<template>
  <v-layout v-scroll="onScroll">
    <div id="goto-container-example"></div>
    <v-main>
      <grid-home-page />
      <to-back-button :is-show="offsetTop" />
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import GridHomePage from "@/components/GridHomePage.vue";
import ToBackButton from "@/components/ToBackButton.vue";

const offsetTop = ref(false);
function onScroll(e) {
  offsetTop.value = e.target?.scrollingElement?.scrollTop >= 100;
}
</script>


<style lang="scss">
html {
  min-height: 100%;
}
.body {
  min-height: 100%;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    130deg,
    rgba(255, 255, 255, 1) 25%,
    rgb(27, 141, 194) 53%,
    rgba(255, 46, 0, 1) 80%
  );
  background: -webkit-linear-gradient(
    130deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(27, 141, 194) 53%,
    rgba(255, 46, 0, 1) 80%
  );
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 1) 25%,
    rgba(27, 141, 194) 53%,
    rgba(255, 46, 0, 1) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ff2e00",GradientType=1);
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}
</style>
