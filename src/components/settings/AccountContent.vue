<template>
  <div class="flex flex-col sm:flex-row gap-8">
    <Card
      class="flex-1 max-w-md rounded-2xl p-4"
      :class="cardClass"
    >
      <template #title>
        <span class="font-semibold text-lg">Informações pessoais</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <span class="p-float-label">
            <InputText id="nome" v-model="nome" class="w-full" />
            <label for="nome">Nome completo</label>
          </span>
          <span class="p-float-label">
            <InputText id="email" v-model="email" class="w-full" />
            <label for="email">E-mail</label>
          </span>
          <Button
            label="Salvar alterações"
            icon="pi pi-save"
            class="mt-4 flex items-center gap-2"
          />
        </div>
      </template>
    </Card>

    <Card
      class="flex-1 max-w-md rounded-2xl p-4"
      :class="cardClass"
    >
      <template #title>
        <span class="font-semibold text-lg">Segurança</span>
      </template>
      <template #content>
        <div class="flex flex-col gap-4">
          <Password
            v-model="senha"
            placeholder="Nova senha"
            class="mb-4 cursor-pointer"
          />
          <Button
            label="Alterar senha"
            icon="pi pi-lock"
            severity="secondary"
            class="flex items-center gap-2"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { useTheme } from '@/composables/useTheme'

const nome = ref('Paulo Júnior')
const email = ref('email@exemplo.com')
const senha = ref('')

const { theme } = useTheme()

const cardClass = computed(() => {
  return theme.value === 'dark'
    ? 'bg-slate-800/60 border border-slate-700 hover:border-slate-500 hover:bg-slate-700/70 shadow-md'
    : 'bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-md'
})
</script>
