# Meu Settings

Projeto de configurações de conta, privacidade e notificações, desenvolvido com Vue 3, TypeScript, Vite, Tailwind CSS e PrimeVue.

## ✨ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeVue](https://primevue.org/) + [PrimeIcons](https://primefaces.org/primevue/icons/)
- [Vue Router](https://router.vuejs.org/)
- [@tanstack/vue-query](https://tanstack.com/query/latest/docs/framework/vue/overview) (para dados reativos)
- [Axios](https://axios-http.com/)

## 📦 Instalação

```bash
git clone https://github.com/SEU_USUARIO/meu-settings.git
cd meu-settings
npm install
```

## 🚀 Rodando o Projeto

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

## 🗂️ Estrutura de Pastas

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
├── public/                    # Arquivos estáticos
├── index.html
├── tailwind.config.cjs
├── vite.config.ts
└── package.json
```

## 🧩 Funcionalidades

- Autenticação fictícia e gerenciamento de perfil
- Troca de tema (claro/escuro)
- Configurações de conta, privacidade e notificações
- Layout responsivo (sidebar, mobile sidebar, topbar)
- Componentização e uso de PrimeVue para UI moderna
- Rotas dinâmicas para subpáginas de configurações

## 🛠️ Scripts Disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview do build

## 📋 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para sua branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
