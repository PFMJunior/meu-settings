import ConfirmLogoutDialog from './ConfirmLogoutDialog.vue';

export default {
  title: 'UI/ConfirmLogoutDialog',
  component: ConfirmLogoutDialog,
};

export const Default = () => ({
  components: { ConfirmLogoutDialog },
  template: '<ConfirmLogoutDialog @confirm="onConfirm" @cancel="onCancel" />',
  methods: {
    onConfirm() { console.log("confirm"); },
    onCancel() { console.log("cancel"); }
  }
});
