<template>
  <div class="p-4">
    <div class="flex items-start gap-4">
      <i class="pi pi-exclamation-triangle text-3xl text-red-500 mt-1"></i>
       <button 
        @click="closeDialog(false)" 
        class="absolute top-0 right-0 p-2 text-xl text-slate-500 cursor-pointer hover:text-slate-900 dark:hover:text-slate-100"
        aria-label="Fechar"
      >
        <i class="pi pi-times"></i>
      </button>
      
      <div>
        <h3 class="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">Confirmação de Logout</h3>
        <p class="text-lg text-slate-700 dark:text-slate-300">
          Tem certeza que deseja sair?
        </p>
      </div>
    </div>

    <div class="flex justify-end gap-3 mt-8">
      <Button 
        label="Cancelar" 
        severity="secondary" 
        outlined 
        @click="closeDialog(false)" 
        autofocus 
        class="w-24"
      />

      <Button 
        label="Sair" 
        severity="danger" 
        @click="closeDialog(true)" 
        class="w-24"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { inject } from 'vue'

const dialogRef = inject('dialogRef') as any

function closeDialog(confirmed: boolean) {
  if (confirmed) {
    console.log('Logout confirmado. Redirecionando para a tela de login...')
  } else {
    console.log('Logout cancelado.')
  }
  
  // Fecha o modal e retorna o resultado
  dialogRef.value.close(confirmed)
}
</script>
