<template>
  <v-layout>
    <v-navigation-drawer
      :expand-on-hover="false"
      :rail="!$vuetify.display.mobile"
      location="right"
    >
      <v-list
        density="compact"
        nav
      >
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
          @click="$router.push('/')"
        >
          <v-tooltip
            activator="parent"
            location="start"
          >
            Главная
          </v-tooltip>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-sale"
          class="text-red"
          title="Cards"
          value="cards"
          @click="$router.push('/cards')"
        >
          <v-tooltip
            activator="parent"
            location="start"
          >
            Товары
          </v-tooltip>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-map"
          title="About"
          value="about"
          @click="$router.push('/about')"
        >
          <v-tooltip
            activator="parent"
            location="start"
          >
            Прочие
          </v-tooltip>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <grid-home-page />
    </v-main>
  </v-layout>
</template>

<script setup>
  import GridHomePage from './components/GridHomePage/GridHomePage.vue';
</script>


<style lang="scss">
  html {
    min-height: 100%;
  }
  .body {
    min-height: 100%;
    background: rgb(255,255,255);
    background: -moz-linear-gradient(162deg, rgba(255,255,255,1) 25%, rgba(194,27,67,1) 53%, rgba(255,46,0,1) 80%);
    background: -webkit-linear-gradient(162deg, rgba(255,255,255,1) 25%, rgba(194,27,67,1) 53%, rgba(255,46,0,1) 80%);
    background: linear-gradient(162deg, rgba(255,255,255,1) 25%, rgba(194,27,67,1) 53%, rgba(255,46,0,1) 80%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ff2e00",GradientType=1);
    background-repeat: no-repeat;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 50px;
  }
</style>
