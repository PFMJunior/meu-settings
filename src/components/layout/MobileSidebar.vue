<template>
  <div class="md:hidden">
    <div class="fixed top-8 bottom-8 left-4 z-50">
      <button 
        @click="open = !open" 
        class="p-2 rounded shadow"
        :class="{
          'bg-white text-slate-900': theme === 'light',
          'bg-slate-800 text-white': theme === 'dark'
        }"
      >
        <i :class="open ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="fixed inset-0 bg-black/50 z-40" @click.self="open = false">
        <div 
          class="w-72 h-full p-4"
          :class="{
            'bg-white text-slate-900': theme === 'light',
            'bg-slate-900 text-white': theme === 'dark'
          }"
        >
          <button class="mb-4" @click="open = false"></button>
          <Sidebar />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import { useTheme } from '@/composables/useTheme' 

const open = ref(false)
const { theme } = useTheme()
</script>
