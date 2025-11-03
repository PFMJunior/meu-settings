import { ref } from 'vue'

type Theme = 'light' | 'dark'

const stored = (() => {
  try {
    return localStorage.getItem('theme') as Theme | null
  } catch {
    return null
  }
})()

const theme = ref<Theme>(stored === 'dark' ? 'dark' : 'light')

function applyDocumentTheme(t: Theme) {
  if (typeof document === 'undefined') return

  if (t === 'dark') document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')

  const link = document.getElementById('prime-theme') as HTMLLinkElement | null
  if (link) {
    link.href = t === 'dark'
      ? 'https://unpkg.com/primevue/resources/themes/lara-dark-indigo/theme.css'
      : 'https://unpkg.com/primevue/resources/themes/lara-light-indigo/theme.css'
  }
}

export function useTheme() {
  function setTheme(t: Theme) {
    theme.value = t
    try {
      localStorage.setItem('theme', t)
    } catch {
    }
    applyDocumentTheme(t)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, setTheme, toggleTheme }
}

if (typeof document !== 'undefined') {
  applyDocumentTheme(theme.value)
}

export type { Theme }
