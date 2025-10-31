<template>
  <div class="relative" ref="root">
    <button
      @click="open = !open"
      class="flex items-center gap-3 p-2 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-slate-600"
      :class="theme === 'light' 
        ? 'hover:bg-slate-100'
        : 'hover:bg-slate-800'" 
      :aria-expanded="open"
      aria-haspopup="true"
    >
      <div 
        class="w-revert h-9 rounded-full flex items-center justify-center text-lg sm:w-9 h-9"
        :class="theme === 'light' ? 'bg-slate-200 text-slate-800' : 'bg-slate-600 text-white'"
      >
        <i class="pi pi-user"></i>
      </div>

      <div class="hidden sm:flex flex-col text-left min-w-5"> 
        <span class="text-sm font-medium">{{ firstName }}</span> 
        <span class="text-xs text-slate-400 truncate">{{ userEmail }}</span>
      </div>

      <i class="pi pi-chevron-down text-sm ml-1 hidden sm:inline-block"></i>
    </button>

    <transition name="fade">
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-700 rounded shadow-lg py-2 z-40"
        role="menu"
        @click.outside="open = false"
      >
        <button class="w-full text-left px-4 py-2 !text-black cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700" @click="goToProfile">
          Perfil
        </button>
        <div class="border-t border-slate-200 dark:border-slate-700 my-1"></div>
        <button class="w-full cursor-pointer !text-black text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900 text-red-600" @click="logout">
          <i class="!text-black pi pi-sign-out mr-2"></i> Sair
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserProfile } from '@/composables/useUserProfile'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const root = ref<HTMLElement | null>(null)
const open = ref(false)
const router = useRouter()
const { theme } = useTheme();
const { data } = useUserProfile()
const user = data

const userName = computed(() => user?.value?.name || 'Guest') 
const userEmail = computed(() => user?.value?.email || '')

const firstName = computed(() => {
  const name = userName.value
  return name.split(' ')[0] // Pega a primeira palavra
})

document.addEventListener('click', (e) => {
  if (!root.value) return
  if (!root.value.contains(e.target as Node)) open.value = false
})

function goToProfile() {
  open.value = false
  router.push('/settings/account')
}

function logout() {
  open.value = false
  console.log('Usuário saiu via dropdown')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-to, .fade-leave-from { opacity: 1; }
</style>
