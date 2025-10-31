<template>
  <div class="flex h-screen">
    <Sidebar class="w-64 hidden md:block" />
    <div class="flex-1">
      <Topbar />
      <main class="p-4">
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
</script>