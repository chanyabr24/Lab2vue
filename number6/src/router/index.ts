import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserLayoutView from '@/views/user/LayoutView.vue'
import UserProfileView from '@/views/user/ProfileView.vue'
import UserPostsView from '@/views/user/PostsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/user/:id',
      name: 'user-layout',
      component: UserLayoutView,
      props: true,
      children: [
        {
          path: '',
          redirect: { name: 'user-profile' }
        },
        {
          path: 'profile',
          name: 'user-profile',
          component: UserProfileView
        },
        {
          path: 'posts',
          name: 'user-posts',
          component: UserPostsView,
          props: true
        }
      ]
    },

    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },

    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router