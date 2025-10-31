import { createRouter, createWebHistory } from 'vue-router'

const SettingsView = () => import('@/views/SettingsView.vue')
const SettingsMain = () => import('@/components/settings/SettingsMain.vue')
const SubpageGeneric = () => import('@/components/settings/SubpageGeneric.vue')

const routes = [
  { path: '/', redirect: '/settings' },
  {
    path: '/settings',
    component: SettingsView,
    children: [
      { path: '', name: 'settings.home', component: SettingsMain },
      { path: ':submenu', name: 'settings.sub', component: SubpageGeneric, props: true }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
