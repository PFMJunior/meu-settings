<template>
  <div class="flex h-screen">
    <Sidebar class="w-64 hidden md:block" />
    <div 
      class="flex flex-col flex-1 min-h-screen" 
      :class="{
        'bg-white text-slate-900': theme === 'light',
        'bg-slate-900 text-slate-100': theme === 'dark'
      }"
    >
      <Topbar />
      <main class="flex-1 p-4 overflow-auto">
        <router-view />
      </main>
    </div>
    <MobileSidebar />
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue'
import Topbar from '@/components/layout/Topbar.vue'
import MobileSidebar from '@/components/layout/MobileSidebar.vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()
</script>
