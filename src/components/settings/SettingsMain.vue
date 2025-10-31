<template>
  <div 
    :class="{ 
      'text-slate-900': theme === 'light', 
      'text-slate-100': theme === 'dark' 
    }"
  >
    <h2 class="text-2xl font-bold mb-4">Visão geral de configurações</h2>
    <p>Escolha uma seção no menu à esquerda.</p>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme' 

const { theme } = useTheme()
</script>
