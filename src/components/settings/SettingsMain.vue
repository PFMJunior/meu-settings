<template>
  <div
    class="p-4 sm:p-6 lg:p-1 transition-colors duration-300 min-h-[80vh]"
    :class="{
      'text-slate-900 bg-slate-50': theme === 'light',
      'text-slate-100 bg-slate-900': theme === 'dark'
    }"
    style="overflow-x:hidden;"
  >
    <div class="max-w-6xl mx-0">
      <h2 class="text-2xl font-bold mb-2">Visão geral de configurações</h2>
      <p class="text-slate-400 mb-4">
        Gerencie as principais preferências da sua conta.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-6 px-2 sm:px-0"
      >
        <div
          v-for="card in cards"
          :key="card.title"
          @click="goTo(card.route)"
          class="group cursor-pointer p-4 sm:p-5 border rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-w-[260px] max-w-xs flex-shrink-0"
          :class="cardClass"
        >
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
            :class="card.iconBg"
          >
            <i :class="['pi', card.icon, 'text-base']"></i>
          </div>
          <h3 class="text-base sm:text-lg font-semibold mb-1">
            {{ card.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useRouter } from 'vue-router'

const { theme } = useTheme()
const router = useRouter()

const goTo = (path: string) => router.push(path)

const cards = [
  {
    title: 'Conta',
    description: 'Gerencie informações pessoais e credenciais de acesso.',
    icon: 'pi-user',
    route: '/settings/account',
    iconBg:
      'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300'
  },
  {
    title: 'Privacidade',
    description: 'Controle quem pode visualizar seus dados e atividades.',
    icon: 'pi-lock',
    route: '/settings/privacy',
    iconBg:
      'bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300'
  },
  {
    title: 'Notificações',
    description: 'Escolha como e quando receber alertas.',
    icon: 'pi-bell',
    route: '/settings/notifications',
    iconBg:
      'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300'
  }
]

const cardClass = computed(() => {
  return theme.value === 'dark'
    ? 'bg-slate-800/50 border-slate-700 hover:border-slate-500 hover:bg-slate-700/60'
    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
})
</script>

<style scoped>
.group:hover i {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

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
