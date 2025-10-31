<template>
  <div class="flex flex-col sm:flex-row gap-8">
    <!-- Visibilidade da conta -->
    <Card
      :class="cardClass"
      class="flex-1 transition-all duration-300 hover:-translate-y-1 rounded-2xl p-4"
    >
      <template #title>Visibilidade da conta</template>
      <template #content>
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span>Mostrar perfil publicamente</span>
            <InputSwitch v-model="perfilPublico" />
          </div>
          <div class="flex items-center justify-between">
            <span>Compartilhar status online</span>
            <InputSwitch v-model="statusOnline" />
          </div>
        </div>
      </template>
    </Card>

    <!-- Controle de atividades -->
    <Card
      :class="cardClass"
      class="flex-1 transition-all duration-300 hover:-translate-y-1 rounded-2xl p-4"
    >
      <template #title>Controle de atividades</template>
      <template #content>
        <div class="flex flex-col gap-4">
          <p class="text-slate-400">
            Ajuste quais atividades podem ser vistas por outros usuários.
          </p>
          <Button label="Gerenciar configurações" icon="pi pi-cog" />
        </div>
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

const perfilPublico = ref(true)
const statusOnline = ref(false)

const cardClass = computed(() => {
  return theme.value === 'dark'
    ? 'bg-slate-800/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-700/60'
    : 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
})
</script>
