// src/main.js ou src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importando estilos
// Importa a biblioteca de ícones (Material Design Icons)
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Importa os estilos de ícones
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', // Define o set de ícones padrão
      aliases,
      sets: {
        mdi,
      },
    },
  });

const app = createApp(App);
app.use(vuetify);
app.mount('#app');