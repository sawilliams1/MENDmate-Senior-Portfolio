/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import 'vuetify/styles';
import router from './router/index.js';


const vuetify = createVuetify({
  components,
});

const app = createApp(App);
app.config.warnHandler = () => {}; // Ignore warnings

app.use(vuetify).use(router);
app.mount('#app');
