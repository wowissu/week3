import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TheWelcome from '@/components/TheWelcome.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          name: 'TheWelcome',
          path: 'TheWelcome',
          props: {
            header() {
              return {
                msg: 'hihi'
              }
            }
          },
          components: {
            header: HelloWorld,
            main: TheWelcome
          }
        }
      ]
      // sensitive: true // https://router.vuejs.org/guide/essentials/route-matching-syntax.html#sensitive-and-strict-route-options
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  // strict: true
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // check login
    console.log({ [to.name as string]: to.meta });
  }

  next();
})

export default router
