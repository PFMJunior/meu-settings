<script setup lang="ts">
defineProps<{
  name?: string
  email?: string
}>()

import { useUserProfile } from '../../composables/useUserProfile';
const { data } = useUserProfile()
const user = data
</script>

<template>
  <div class="flex items-center gap-3 p-2 border rounded-md shadow-sm">
    <div class="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white">
      <i class="pi pi-user"></i>
    </div>
    <div class="min-w-0">
      <div class="text-sm font-medium truncate">{{ name || user?.name || 'Usuário' }}</div>
      <div class="text-xs text-slate-400 truncate">{{ email || user?.email || 'email@exemplo.com' }}</div>
    </div>
  </div>
</template>
