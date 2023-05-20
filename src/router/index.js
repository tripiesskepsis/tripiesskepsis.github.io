// 1. Define route components.
// These can be imported from other files
import {createRouter,createWebHashHistory} from 'vue-router'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import Contact from '../components/ContactPage'




// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: Contact }


]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router