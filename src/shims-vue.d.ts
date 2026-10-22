// src/shims-vue.d.ts
// Позволяет импортировать .vue-файлы и .css/.scss из TypeScript (lang="ts" в SFC).

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Стилевые импорты с побочным эффектом (vuetify/styles, tailwind.css и т.п.)
declare module '*.css';
declare module '*.scss';
declare module 'vuetify/styles';
declare module '@mdi/font/css/materialdesignicons.css';
