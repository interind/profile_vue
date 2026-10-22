import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
// Глобальные утилиты Tailwind (preflight отключён — не конфликтует с Vuetify)
import './assets/tailwind.css';

createApp(App).use(vuetify).mount('#app');
