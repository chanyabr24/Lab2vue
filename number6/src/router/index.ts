import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserLayoutView from '@/views/user/LayoutView.vue'
import UserProfileView from '@/views/user/ProfileView.vue'
import UserPostsView from '@/views/user/PostsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import EditView from '@/views/user/EditView.vue'
import nProgress from 'nprogress'
import UserService from '@/services/UserService'

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
      beforeEnter: (to) => {
    const id = parseInt(to.params.id as string)

    return UserService.getUser(id)
      .then((response) => {
         console.log(response.data)
      })
      .catch(() => {
        return {
          name: '404-resource-view',
          params: {
            resource: 'user'
          }
        }
      })
  },

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
        },
        {
          path: 'edit',
          name: 'user-edit-view',
          component: EditView
        },
        
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
  ],
  scrollBehavior(to, from, savedPosition) {
  console.log(savedPosition)
return new Promise((resolve) => {
    setTimeout(() => {
      if (savedPosition) {
        resolve(savedPosition)
      } else {
        resolve({ top: 0 })
      }
    }, 300)
  })
}
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router