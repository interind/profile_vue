<template>
  <section class="col">
    <div class="item">
      <h1
        :class="[
          'item__title',
          {
            'text-h3': $vuetify.display.mobile,
            'text-h1': !$vuetify.display.mobile,
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
      <div :class="{'d-flex flex-wrap align-self-stretch': $vuetify.display.mobile }">
        <v-card
          class="flex-1-1-100"
          :max-width="$vuetify.display.mobile ? '100%' : 300"
          rounded="0"
          >
          <v-avatar
            color="grey"
            rounded="0"
            :size="$vuetify.display.mobile ? '100%' : 300"
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
            @click="sheet = false"
          ></v-list-item>
        </v-list>
      </div>
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
            :href="item.href"
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
import info from "../data/home";
import profile from "@/assets/img/profile.jpg";
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  &__title {
    display: inline-block;
    padding: 0 20px;
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
