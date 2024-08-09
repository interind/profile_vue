<template>
  <v-btn v-show="is" class="back" position="fixed" prepend-icon="mdi-arrow-up" @click="clickUp">
    Вверх
  </v-btn>
</template>

<script setup>
import { computed } from "vue";
import { useGoTo } from 'vuetify';


const props = defineProps({
  isShow: Boolean
});
const goTo = useGoTo();
const animateScroll = {
    duration: 400,
    easing: 'easeInQuint',
    offset: 0
  };
const clickUp = () => goTo(0, animateScroll);

const is = computed(() => !!props?.isShow);

</script>

<style lang="scss" scoped>
  .back {
    right: 50%;
    bottom: 10px;
    opacity: 0.5;
    translate: 50% 0;
  }
</style>