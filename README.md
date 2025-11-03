# ⚙️ Meu Settings

Projeto de **configurações de conta, privacidade e notificações**, desenvolvido com **Vue 3**, **TypeScript**, **Vite**, **Tailwind CSS**, **PrimeVue** e **Vitest**.  
Inclui suporte a **modo claro/escuro**, **componentes reutilizáveis**, **Storybook** e **testes unitários automatizados**.

---

## ✨ Tecnologias Utilizadas

- ⚡ [Vue 3](https://vuejs.org/) — framework progressivo para interfaces reativas  
- 🧠 [TypeScript](https://www.typescriptlang.org/) — tipagem estática para código mais seguro  
- 🚀 [Vite](https://vitejs.dev/) — bundler rápido para desenvolvimento moderno  
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária e responsiva  
- 💎 [PrimeVue](https://primevue.org/) + [PrimeIcons](https://primefaces.org/primevue/icons/) — componentes de UI modernos  
- 🔗 [Vue Router](https://router.vuejs.org/) — roteamento de páginas  
- 🔄 [@tanstack/vue-query](https://tanstack.com/query/latest/docs/framework/vue/overview) — gerenciamento reativo de dados  
- 🌐 [Axios](https://axios-http.com/) — requisições HTTP  
- 🧪 [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/) — testes unitários rápidos  
- 📚 [Storybook](https://storybook.js.org/) — visualização e documentação de componentes isoladamente  

---

## 📦 Instalação

```bash
git clone git@github.com:PFMJunior/meu-settings.git
cd meu-settings
npm install
```

🚀 Rodando o Projeto

```bash
npm run dev
```
Acesse: http://localhost:5173

🧪 Rodando os Testes

```bash
npm run test
```

📖 Visualizando Componentes no Storybook

```bash
npm run storybook
```
Acesse: http://localhost:6006

🗂️ Estrutura de Pastas

```
├── src/
│   ├── assets/                # Imagens e SVGs
│   ├── components/
│   │   ├── layout/            # Sidebar, Topbar, MobileSidebar
│   │   ├── settings/          # SettingsMain, AccountContent, PrivacyContent, NotificationsContent, SubpageGeneric
│   │   └── ui/                # Componentes reutilizáveis (ProfileCard, ThemeToggle, etc)
│   ├── composables/           # Hooks/composables (useTheme, useUserProfile)
│   ├── router/                # Configuração de rotas
│   ├── views/                 # Views principais (SettingsView)
│   ├── App.vue
│   ├── main.ts
│   └── index.css
├── tests/                     # Testes unitários (Vitest + Vue Test Utils)
├── .storybook/                # Configuração do Storybook
├── public/                    # Arquivos estáticos
├── index.html
├── tailwind.config.cjs
├── vite.config.ts
└── package.json
```

🧩 Funcionalidades

✅ Gerenciamento de conta, privacidade e notificações
🌗 Alternância de tema (claro/escuro) com persistência
🧱 Componentização e reuso com PrimeVue + Tailwind
📱 Layout responsivo (Sidebar, Topbar, Mobile Sidebar)
⚙️ Composables Vue 3 para lógica reativa
🧪 Testes unitários com mocks e cobertura real de comportamento
🧰 Storybook para desenvolvimento e documentação visual de componentes

🛠️ Scripts Disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview do build
- `npm run test` — Executa os testes unitários (Vitest)
- `npm run storybook` — Inicia o Storybook
- `npm run build-storybook` — Gera a versão estática do Storybook

📋 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para sua branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.