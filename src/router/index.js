import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/',
    name: 'page_1',
    component: () => import(/* webpackChunkName: "page_1" */ '../views/page_1.vue'),
  },
  {
    path: '/page_2',
    name: 'page_2',
    component: () => import(/* webpackChunkName: "page_2" */ '../views/page_2.vue'),
  },
  {
    path: '/page_3',
    name: 'page_3',
    component: () => import(/* webpackChunkName: "page_3" */ '../views/page_3.vue'),
  },
  {
    path: '/page_4',
    name: 'page_4',
    component: () => import(/* webpackChunkName: "page_4" */ '../views/page_4.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
