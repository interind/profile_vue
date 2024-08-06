<template>
  <section class="grid">
    <div class="content item">
      <v-card
        max-width="300"
        rounded="0"
      >
        <v-img
          height="100%"
          :src="bg"
          position="bottom"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          cover
        >
          <v-avatar
            color="grey"
            rounded="0"
            size="300"
          >
          <v-img :src="profile" cover />
          </v-avatar>
          <v-list-item
            class="text-white"
            :title="info.lastName"
            :subtitle="info.firstName"
          />
        </v-img>
      </v-card>
      <h1>{{ info.work }}</h1>
    </div>
    <div
      v-for="([key, value], index) in Object.entries(info.technologies)"
      :key="key"
      :class="`card item${index + 1}`"
    >
      <v-list density="comfortable" variant="text" bgColor="transparent">
        <v-list-subheader :style="{textTransform: 'capitalize' }">{{ key }}</v-list-subheader>

        <v-list-item
          v-for="(item, i) in value"
          :key="i"
          :value="item"
          color="primary"
          disabled
        >
          <template v-slot:prepend>
            <v-icon :icon="`mdi-${item.icon}`"></v-icon>
          </template>

          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </section>
</template>

<script setup>
  import info from '../../data/home';
  import profile from '@/assets/img/profile.jpg';
  import bg from '@/assets/img/bg.jpg';
</script>

<style lang="scss" scoped>
.grid {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 50px;
  min-height: 90vh;

  /* --------- Card Animation ---------- */
  .card:not(:empty):hover,
  .card:not(:empty):focus {
    z-index: 1;
    color: #fff;
    background: #d81313be;
    opacity: 1;
    transform: scale(.95) rotateZ(-2deg);
    cursor: pointer;

    &:after {
      opacity: 1;
    }

    &:before {
      opacity: 0;
    }
  }

  .card {
    padding: 10px;
    background: #fcc99e;
    border-radius: .7em;
    opacity: 0.6;
    transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: background, transform, color, opacity;

    &:not(:empty):before {
      box-shadow: -2px 2px 8px 2px hsla(0, 0%, 0%, 0.2);
    }

    &:empty {
      opacity: 0.3;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      border-radius: .7em;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: opacity 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    }

    &:after {
      box-shadow: -20px 20px 12px 6px hsla(0, 0%, 0%, 0.2);
      opacity: 0;
    }
  }


  .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    grid-column: 1/3;
    grid-row: 1/3;
  }

  $colors: (blue, green,  CornflowerBlue, orange);

  @for $i from 1 through 4 {
    .item#{$i} {
      &.card:hover,
      &.card:focus {
        background: nth($colors, $i);

      }
    }
  }

  .item1 {
    grid-column: 3/5;
    grid-row: 1/2;
  }

  .item2 {
    grid-column: 5/6;
    grid-row: 1/2;
  }

  .item3 {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  .item4 {
    grid-column: 4/5;
    grid-row: 2/3;
  }

  .item5 {
    grid-column: 5/6;
    grid-row: 2/3;
  }

  .item6 {
    grid-column: 2/4;
    grid-row: 3/4;
  }

  .item7 {
    grid-column: 4/5;
    grid-row: 3/5;
  }

  .item8 {
    grid-column: 5/6;
    grid-row: 3/4;
  }

  .item9 {
    grid-column: 5/6;
    grid-row: 4/5;
  }

  .item10 {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    line-height: 1.2;
    font-family: "Jost", sans-serif;
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {
    font-size: 1em;
    margin: 0;
  }

  p {
    line-height: 1.3;
  }

}

// /*--------- Layout -------- */
*,
*:before,
*:after {
  position: relative;
  box-sizing: border-box;
}


/* --------- Responsive ---------- */
@media only screen and (max-width: 1080px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;

    .item {
      grid-column: 1/4;
      grid-row: 1/3;
    }

    .item1 {
      grid-column: 4/6;
      grid-row: 1/2;
    }

    .item2 {
      grid-column: 4/5;
      grid-row: 2/3;
    }

    .item3 {
      grid-column: 5/6;
      grid-row: 2/4;
    }

    .item4 {
      grid-column: 2/5;
      grid-row: 3/4;
    }

    .item5 {
      grid-column:5/6;
      grid-row: 4/5;
    }

    .item6 {
      grid-column: 2/4;
      grid-row: 4/5;
    }

    .item7 {
      grid-column: 4/5;
      grid-row: 4/5;
    }

    .item8 {
      grid-column: 1/2;
      grid-row: 5/6;
    }

    .item9 {
      grid-column: 2/5;
      grid-row: 5/6;
    }

    .item10 {
      grid-column: 5/6;
      grid-row: 5/6;
    }

  }
}
@media only screen and (max-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;

    .item {
      grid-column: 1/7;
      grid-row: 1/2;
    }

    .item1 {
      grid-column: 1/3;
      grid-row: 2/3;
    }

    .item2 {
      grid-column: 4/7;
      grid-row: 2/3;
    }

    .item3 {
      grid-column: 1/5;
      grid-row: 3/4;
    }

    .item4 {
      grid-column: 2/6;
      grid-row: 4/5;
    }

    .item5 {
      grid-column: 1/3;
      grid-row: 5/6;
    }

    .item6 {
      grid-column: 3/7;
      grid-row: 5/7;
    }

    .item7 {
      grid-column: 2/5;
      grid-row: 7/8;
    }

    .item8 {
      grid-column: 1/3;
      grid-row: 8/10;
    }

    .item9 {
      grid-column: 3/7;
      grid-row: 8/9;
    }

    .item10 {
      grid-column: 3/5;
      grid-row: 9/11;
    }

  }
}
@media only screen and (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;

    .item {
      grid-column: 1/5;
      grid-row: 1/2;
    }

    .item1 {
      grid-column: 1/3;
      grid-row: 2/3;
    }

    .item2 {
      grid-column: 3/5;
      grid-row: 2/4;
    }

    .item3 {
      grid-column: 1/3;
      grid-row: 3/4;
    }

    .item4 {
      grid-column: 1/3;
      grid-row: 4/6;
    }

    .item5 {
      grid-column: 3/5;
      grid-row: 4/5;
    }

    .item6 {
      grid-column: 3/5;
      grid-row: 5/6;
    }

    .item7 {
      grid-column: 3/5;
      grid-row: 6/8;
    }

    .item8 {
      grid-column: 1/3;
      grid-row: 6/7;
    }

    .item9 {
      grid-column: 1/3;
      grid-row: 7/8;
    }

    .item10 {
      grid-column: 1/4;
      grid-row: 8/9;
    }

  }
}
@media only screen and (max-width: 500px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item {
      align-items: center;

      h1 {
        font-size: 2.2rem;
      }

      p {
        font-size: 1rem;
      }
    }


  }
}

</style>

