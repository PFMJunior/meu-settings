<template>
  <div :class="theme === 'dark' ? 'dark' : ''">
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