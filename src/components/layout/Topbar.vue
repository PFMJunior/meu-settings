<template>
  <header
    :class="{ 
      'bg-white text-slate-900 border-slate-200': theme === 'light', 
      'bg-slate-900 text-slate-100 border-slate-700': theme === 'dark' 
    }"
    class="flex items-center justify-between p-4 sticky top-0 z-30 border-b"
    role="banner"
  >
    <div class="flex items-center gap-4">
      <!-- botão mobile (exibe apenas em md-) -->
      <!-- <button class="hidden p-2 rounded" 
              :class="theme === 'light' ? 'bg-slate-100' : 'bg-slate-800'"
              @click="$emit('open-mobile')" aria-label="Abrir menu">
        <i class="pi pi-bars text-lg"></i>
      </button> -->

      <h1 class="hidden md:block sm:text-lg font-semibold">Meu Settings</h1>
    </div>

    <div class="flex items-center gap-4">
      <!-- ocultar label no mobile -->
      <div class="flex items-center gap-3">
        <profile-dropdown />
      </div>

      <div class="flex items-center gap-3">
        <theme-toggle />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ProfileDropdown from '@/components/ui/ProfileDropdown.vue';
import ThemeToggle from '@/components/ui/ThemeToggle.vue';
import { useTheme } from '@/composables/useTheme';

const { theme } = useTheme();
</script>

<style scoped>
.pi { line-height: 0; }
</style>
