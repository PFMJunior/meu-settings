import { setup } from '@storybook/vue3';
import PrimeVue from 'primevue/config';
import '../src/index.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// Configurar globalmente o PrimeVue para todas as stories
setup((app) => {
  app.use(PrimeVue);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  layout: 'centered',
};
