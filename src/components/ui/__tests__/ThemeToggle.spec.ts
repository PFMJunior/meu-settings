import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref, nextTick } from 'vue'
import ThemeToggle from '../ThemeToggle.vue'

// Mock do composable useTheme
const theme = ref('light')
const toggleTheme = vi.fn(() => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
})

vi.mock('../../../composables/useTheme', () => ({
  useTheme: () => ({
    theme,
    toggleTheme,
  }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    theme.value = 'light'
    vi.clearAllMocks()
  })

  it('deve renderizar corretamente com tema claro', () => {
    const wrapper = mount(ThemeToggle)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toContain('pi-sun')
  })

  it('deve alternar o tema e o ícone ao clicar', async () => {
    const wrapper = mount(ThemeToggle)

    expect(theme.value).toBe('light')
    expect(wrapper.html()).toContain('pi-sun')

    // Seleciona o elemento clicável real (ex: o ícone ou o botão)
    const clickable = wrapper.find('i') // ou outro seletor se necessário
    await clickable.trigger('click')
    await nextTick()

    // Verifica se o mock realmente foi chamado e mudou o valor
    expect(toggleTheme).toHaveBeenCalled()
    expect(theme.value).toBe('dark')
    expect(wrapper.html()).toContain('pi-moon')
  })
})
