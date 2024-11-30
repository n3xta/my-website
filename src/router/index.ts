import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Sketch from '../views/Sketch.vue'
import AppIndex from '../views/AppIndex.vue'
import Shader from '../views/Shader.vue'
import Edu from '../views/NYU.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/sketch', component: Sketch },
  { path: '/app', component: AppIndex },
  { path: '/shader', component: Shader },
  { path: '/nyu-ima', component: Edu },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router