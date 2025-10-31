<template>
  <aside
    :class="{
      'bg-white text-slate-900': theme === 'light',
      'bg-slate-900 text-slate-100': theme === 'dark'
    }"
    class="h-full p-4"
  >
    <div class="mb-6">
      <h2 class="text-lg font-semibold">Configurações</h2>
    </div>

    <nav class="space-y-1">
      <RouterLink
        v-for="item in items"
        :key="item.slug"
        :to="`/settings/${item.slug}`"
        @click="closeMenu"
        class="block"
      >
        <div
          :class="[
            'flex items-center p-3 rounded gap-3 transition-colors',
            isActive(item.slug)
              ? 'bg-slate-200 dark:bg-slate-800 dark:text-white'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800/60'
          ]"
        >
          <i :class="item.icon + ' text-lg'"></i>
          <span class="truncate">{{ item.label }}</span>
        </div>
      </RouterLink>
    </nav>

    <div class="mt-4">
      <button
        @click="onLogout"
        class="w-full cursor-pointer text-left p-3 rounded hover:bg-red-700/20 flex items-center gap-3"
      >
        <i class="pi pi-sign-out"></i>
        <span>Sair</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import ConfirmLogoutDialog from '@/components/ui/ConfirmLogoutDialog.vue'
import { useTheme } from '@/composables/useTheme'

const props = defineProps<{
  isMobile?: boolean
}>()

const emit = defineEmits<{ (e: 'close'): void }>()

const { theme } = useTheme()
const route = useRoute()
const items = ref([
  { slug: 'account', label: 'Conta', icon: 'pi pi-user' },
  { slug: 'privacy', label: 'Privacidade', icon: 'pi pi-lock' },
  { slug: 'notifications', label: 'Notificações', icon: 'pi pi-bell' },
])

const dialog = getCurrentInstance()?.appContext.config.globalProperties.$dialog as any

function isActive(slug: string) {
  return route.params.submenu === slug || (slug === 'account' && route.path === '/settings')
}

function closeMenu() {
  if (props.isMobile) {
    emit('close')
  }
}

function onLogout() {
  dialog.open(ConfirmLogoutDialog, {
    props: { header: null, modal: true, closable: false, style: { width: '30rem' } },
    data: { userName: 'Usuário Teste' },
    onClose: (options: any) => {
      if (options?.data === true) {
        console.log('Logout confirmado (via onClose).')
      }
    },
  })
}
</script>
