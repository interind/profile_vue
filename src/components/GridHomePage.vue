<template>
  <section class="d-flex flex-column ga-5">
    <div class="item">
      <h1
        :class="[
          'item__title',
          {
            'text-h3': isMobile,
            'text-h1': !isMobile,
          },
        ]"
      >
        <span
          v-for="(work, index) in info.work.split(' ')"
          :key="index"
          :class="{ 'text-left': !index, 'text-right': index }"
        >
          {{ work }}
        </span>
      </h1>
      <div :class="['d-flex', {'flex-column align-self-stretch': isMobile }]">
        <v-card
          :class="['flex-1-1-100', [{'mr-m-20': isMobile }]]"
          :max-width="isMobile ? '100%' : 300"
          rounded="0"
          variant="text"
          >
          <v-avatar
            color="grey"
            rounded="0"
            :size="isMobile ? '100%' : 300"
          >
            <v-img :src="profile" cover />
          </v-avatar>
        </v-card>
        <v-list bgColor="transparent">
          <v-list-item
            v-for="tile in info.titles"
            :key="tile.title"
            :prependIcon="tile.icon"
            :title="tile.title"
            :href="tile.link"
            :disabled="!tile.link"
            @click="sheet = false"
          ></v-list-item>
        </v-list>
      </div>
    </div>
    <div class="align-self-stretch" :style="{maxWidth: '790px'}">
      <v-divider><h2>Технологии</h2></v-divider>
    </div>
    <div class="d-flex flex-wrap ga-5">
      <div
        v-for="([key, value], index) in Object.entries(info.technologies)"
        :key="key"
        :class="`card item${index + 1}`"
      >
        <v-list density="comfortable" variant="text" bgColor="transparent">
          <v-list-subheader :style="{ textTransform: 'capitalize' }">{{
            key
          }}</v-list-subheader>
          <v-divider inset></v-divider>
          <v-list-item
            v-for="(item, i) in value"
            :key="i"
            :value="item"
            color="primary"
            :href="item.link"
            :disabled="!item.link"
            target="__blank"
          >
            <template v-slot:prepend>
              <v-icon :icon="`mdi-${item.icon}`"></v-icon>
            </template>

            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import info from "../data/home";
import profile from "@/assets/img/profile.jpg";
import { useDisplay } from "vuetify/lib/framework.mjs";

const  { width } = useDisplay();

const isMobile = computed(() => width.value <= 720);
</script>

<style lang="scss" scoped>
.mr-m-20 {
  margin: 0 -20px;
  width: calc(100% + 40px);
  min-width: calc(100% + 40px);
  align-self: stretch;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  &__title {
    display: inline-block;
    font-size: 3.052em;
    span {
      display: inline-block;
      width: 100%;
    }
  }
}
.card {
  min-width: 300px;
}
</style>
