import './assets/main.css'

import { createApp } from 'vue'
import router from './router.js'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
      colors: {
        primary: "#313166",
        primaryText: "#FFFFFF",
        highlight: '#3B0082'
      }
    }

  }
})
app.mount('#app')
app.component('Button', Button);
