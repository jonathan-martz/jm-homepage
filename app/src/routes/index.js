import { createRouter ,createWebHistory} from "vue-router";

import Welcome from '../pages/welcome.vue';
import Contact from '../pages/contact.vue';
import Impressum from '../pages/impressum.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/impressum', component: Impressum },
  { path: '/contact', component: Contact },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;