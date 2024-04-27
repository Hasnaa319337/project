import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import MaintenancePage from '../@core/components/misc/under-maintenance.vue'
import { isUserLoggedIn } from './utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: '/under-maintenance',
      name: 'Maintenance',
      component: MaintenancePage,
    },
    {
      path: '/',
      redirect: (to) => {
        // const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        // const userRole =
        //   userData && userData.is_super_admin ? userData.is_super_admin : null

        // if (userRole === true) return { name: 'dashboard-analytics' }
        // if (userRole === null) return { name: 'dashboard-analytics' }

        // return { name: 'auth-login', query: to.query }
        return { name: 'home' }
      },
    },
    {
      path: '/pages/user-profile',
      redirect: () => ({
        name: 'user-profile-tab',
        params: { tab: 'profile' },
      }),
    },
    {
      path: '/modules/user/pages/account-settings',
      redirect: () => ({
        name: 'user-account-settings-tab',
        params: { tab: 'account' },
      }),
    },

    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

// router.beforeEach(async (to, from) => {
//   const isLoggedIn = isUserLoggedIn()
//   if (

//     !isLoggedIn &&

//     to.name !== 'auth-login' &&
//     to.name !== 'auth-register'
//   ) {

//     return { name: 'auth-login' }
//   }
// })

export default router
