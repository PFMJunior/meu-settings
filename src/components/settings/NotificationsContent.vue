<template>
  <div class="flex flex-col sm:flex-row gap-8">
    <Card
      :class="cardClass"
      class="flex-1 transition-all duration-300 hover:-translate-y-1 rounded-2xl p-4"
    >
      <template #title>Notificações por e-mail</template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span>Receber atualizações</span>
            <InputSwitch v-model="emailAtualizacoes" />
          </div>
          <div class="flex items-center justify-between">
            <span>Alertas de segurança</span>
            <InputSwitch v-model="emailSeguranca" />
          </div>
        </div>
      </template>
    </Card>

    <Card
      :class="cardClass"
      class="flex-1 transition-all duration-300 hover:-translate-y-1 rounded-2xl p-4"
    >
      <template #title>Notificações do sistema</template>
      <template #content>
        <p class="text-slate-400 mb-4">
          As notificações do sistema aparecem diretamente no painel superior.
        </p>
        <Button label="Gerenciar preferências" icon="pi pi-cog" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

import Card from 'primevue/card'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'

const { theme } = useTheme()

const emailAtualizacoes = ref(true)
const emailSeguranca = ref(true)

const cardClass = computed(() => {
  return theme.value === 'dark'
    ? 'bg-slate-800/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-700/60'
    : 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
})
</script>
