import { createApp } from 'vue'
import App from './App.vue'

import './tailwind.css'
import routes from './routes'
import i18n from './translate'

const app = createApp(App);


  

app.use(i18n);
app.use(routes);
app.mount('#app');
