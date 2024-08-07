<template>
  <v-btn v-show="is" position="fixed" location="bottom right" icon="mdi-arrow-up" @click="clickUp" :style="{ right: '20px', bottom: '20px', opacity: 0.5 }"/>
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