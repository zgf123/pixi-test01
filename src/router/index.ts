import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pixi-demo',
      name: 'pixi-demo',
      component: () => import('../views/PixiDemo.vue')
    },
    {
      path: '/first-app',
      name: 'first-app',
      component: () => import('../views/PixiDemo/01FirstApp.vue')
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import('../views/PixiDemo/02Graphics.vue')
    },
    {
      path: '/shape',
      name: 'shape',
      component: () => import('../views/PixiDemo/03Shape.vue')
    },
    {
      path: '/sprite',
      name: 'sprite',
      component: () => import('../views/PixiDemo/04Sprite.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/PixiDemo/05Events.vue')
    },
    {
      path: '/load-resource',
      name: 'load-resource',
      component: () => import('../views/PixiDemo/06LoadResource.vue')
    },
    {
      path: '/mask',
      name: 'mask',
      component: () => import('../views/PixiDemo/07Mask.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/PixiDemo/08Filter.vue')
    },
    {
      path: '/example1',
      name: 'example1',
      component: () => import('../views/PixiDemo/09Example.vue')
    },
    {
      path: '/example2',
      name: 'example2',
      component: () => import('../views/PixiDemo/10Example.vue')
    }
  ]
})

export default router
