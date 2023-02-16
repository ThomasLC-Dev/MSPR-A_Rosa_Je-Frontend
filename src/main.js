import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ('./assets/customCSS/colors.css');
import ('./assets/customCSS/globalStylesheets.css');
createApp(App).use(router).mount('#app')
