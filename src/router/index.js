import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ProfilePage from '../views/ProfilePage.vue'
import PracticePage from '../views/PracticePage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import AboutPage from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/practice',
    name: 'Practice',
    component: PracticePage
  },
  {
  path: '/sign-up',
  name: 'SignUp',
  component: SignUpPage
  },
  {
  path: '/profile',
  name: 'Profile',
  component: ProfilePage
  }, 
  {
  path: '/about',
  name: 'About',
  component: AboutPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
