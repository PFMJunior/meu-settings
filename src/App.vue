<template>
  <div :class="theme === 'dark' ? 'dark' : ''">
    <!-- Remova as classes bg-slate-50 e dark:bg-slate-900 temporariamente -->
    <div class="min-h-screen text-slate-900 dark:text-slate-100">
      <router-view />
      <DynamicDialog />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from './composables/useTheme'
const { theme } = useTheme()
</script>