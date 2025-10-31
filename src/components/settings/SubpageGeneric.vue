<template>
  <div
    :class="{ 
      'text-slate-900': theme === 'light', 
      'text-slate-100': theme === 'dark' 
    }"
  >
    <h2 class="text-2xl font-bold mb-4">Subpágina: {{ submenu }}</h2>
    <p>Conteúdo para a subpágina <strong>{{ submenu }}</strong></p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme' 

const { theme } = useTheme()
const route = useRoute()
const submenu = route.params.submenu || 'home'
</script>
