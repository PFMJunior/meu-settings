<template>
  <div class="flex items-center">
    <div 
      class="flex items-center gap-2 cursor-pointer select-none"
      @click="toggleTheme"
    >
      <label class="text-sm hidden sm:inline-block cursor-pointer">Tema</label>

      <div class="flex items-center gap-2">
        <i v-if="theme === 'dark'" class="pi pi-moon text-lg"></i>
        <i v-else class="pi pi-sun text-lg"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../../composables/useTheme';
const { theme, toggleTheme } = useTheme()
</script>

<style scoped>
.p-inputswitch { vertical-align: middle; }
</style>
