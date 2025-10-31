<template>
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-slate-600"></div>
    <div class="min-w-0">
      <div class="text-sm font-medium truncate">{{ user?.name || 'Usuário' }}</div>
      <div class="text-xs text-slate-400 truncate">{{ user?.email || '' }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserProfile } from '@/composables/useUserProfile'
const { data } = useUserProfile()
const user = data
</script>
