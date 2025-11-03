<template>
  <div
    class="relative p-6 rounded-xl shadow-lg transition-colors duration-300"
    :class="{
      'bg-slate-100 text-slate-900': theme === 'light',
      'bg-slate-800 text-slate-100': theme === 'dark'
    }"
  >
    <div class="flex items-start gap-4">
      <i
        class="pi pi-exclamation-triangle text-4xl mt-1"
        :class="theme === 'light' ? 'text-red-500' : 'text-yellow-400'"
      ></i>

      <div class="flex-1">
        <h3 class="text-xl font-semibold mb-2">
          Confirmação de Logout
        </h3>
        <p class="text-base opacity-80">
          Tem certeza que deseja sair?
        </p>
      </div>

      <button
        @click="closeDialog(false)"
        class="absolute top-3 right-3 p-2 rounded-full cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700"
        aria-label="Fechar"
      >
        <i class="pi pi-times"></i>
      </button>
    </div>

    <div class="flex justify-end gap-3 mt-8">
      <Button
        label="Cancelar"
        severity="secondary"
        outlined
        @click="closeDialog(false)"
        class="w-28"
      />
      <Button
        label="Sair"
        severity="danger"
        @click="handleLogout"
        class="w-28"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../../composables/useTheme'

const fallbackDialog = ref({ close: () => {} })
const dialogRef = inject('dialogRef', fallbackDialog) as any

const { theme } = useTheme()
const router = useRouter()

function handleLogout() {
  console.log('Logout confirmado. Redirecionando para /settings/')
  dialogRef.value.close(true)
  try {
    router.push('/settings/')
  } catch (err) {
    console.warn('Router não disponível:', err)
  }
}

function closeDialog(confirmed: boolean) {
  if (!confirmed) {
    console.log('Logout cancelado.')
  }
  dialogRef.value.close(confirmed)
}
</script>

<style scoped>
:deep(.p-button) {
  transition: background-color 0.2s, color 0.2s;
}
</style>
