<script setup>
// App.vue — точка входа. Показываем новую страницу резюме ResumePage.vue.
// Старые GridHomePage/ToBackButton сохранены в src/components (не удалены),
// чтобы при желании можно было вернуть прежний вид.
import ResumePage from "@/views/ResumePage.vue";
</script>

<template>
  <v-layout v-scroll="onScroll">
    <v-main>
      <ResumePage />
    </v-main>
  </v-layout>
</template>

<script>
// Хук прокрутки оставлен для обратной совместимости (использовался ToBackButton).
export default {
  data() {
    return { offsetTop: false };
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target?.scrollingElement?.scrollTop >= 100;
    },
  },
};
</script>

<style lang="scss">
html {
  min-height: 100%;
}
.body {
  min-height: 100%;
  background: #ffffff; /* нейтральный фон вместо градиента */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0; /* убрали паддинг 20px — контейнер внутри ResumePage */
}
</style>
