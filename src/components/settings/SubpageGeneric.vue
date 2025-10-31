<template>
  <div
    class="p-4 sm:p-6 lg:p-1 transition-colors duration-300"
    :class="{
      'text-slate-900 bg-slate-50': theme === 'light',
      'text-slate-100 bg-slate-900': theme === 'dark'
    }"
    style="overflow-x:hidden;"
  >
    <div class="max-w-6xl mx-0 space-y-8">
      <div>
        <h2 class="text-2xl font-bold mb-2 capitalize">
          {{ pageTitle }}
        </h2>
        <p class="text-slate-400">{{ pageSubtitle }}</p>
      </div>

      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

import AccountContent from './AccountContent.vue'
import PrivacyContent from './PrivacyContent.vue'
import NotificationsContent from './NotificationsContent.vue'

const route = useRoute()
const { theme } = useTheme()

const submenu = computed(() => route.params.submenu as string)

const currentComponent = computed(() => {
  switch (submenu.value) {
    case 'account':
      return AccountContent
    case 'privacy':
      return PrivacyContent
    case 'notifications':
      return NotificationsContent
    default:
      return AccountContent
  }
})

const pageTitle = computed(() => {
  switch (submenu.value) {
    case 'account':
      return 'Configurações da conta'
    case 'privacy':
      return 'Privacidade'
    case 'notifications':
      return 'Notificações'
    default:
      return 'Configurações'
  }
})

const pageSubtitle = computed(() => {
  switch (submenu.value) {
    case 'account':
      return 'Gerencie seus dados pessoais e credenciais de acesso.'
    case 'privacy':
      return 'Controle quem pode visualizar suas informações e atividades.'
    case 'notifications':
      return 'Escolha como e quando receber notificações e alertas.'
    default:
      return 'Ajuste as preferências da sua conta.'
  }
})
</script>

<style scoped>
@media (max-width: 640px) {
  .min-h-\[80vh\] {
    min-height: 100vh !important;
    background-color: inherit !important;
  }
  .bg-white {
    background-color: transparent !important;
  }
}
</style>
