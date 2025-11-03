import ProfileCard from './ProfileCard.vue';

export default {
  title: 'Settings/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text', description: 'Nome do usuário' },
    email: { control: 'text', description: 'E-mail do usuário' },
  },
};

export const Default = (args: any) => ({
  components: { ProfileCard },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 250px;">
      <ProfileCard v-bind="args" />
    </div>
  `,
});

Default.args = {
  name: 'Paulo Montefusco',
  email: 'paulo@exemplo.com',
};
