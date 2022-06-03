import { createApp } from 'vue'
import App from './App.vue'

import './tailwind.css'
import routes from './routes'
import i18n from './translate'
import plausible from './plugins/plausible';

const app = createApp(App);

const plausibleOptions = { 
  domain: 'www.jmartz.de',
  apiHost: 'https://tracking.jmartz.gmbh',
  hashMode: false,
  trackLocalhost: false,
};
  
app.use(plausible,plausibleOptions);
app.use(i18n);
app.use(routes);
app.mount('#app');
