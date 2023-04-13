<template>
  <v-btn
      class="text-none"
      size="large"
      block
      color="grey-lighten-2"
      @click="isDialogVisible = true"
  >
    Password
  </v-btn>
  <v-dialog
      v-model="isDialogVisible"
      max-width="550px"
  >
    <v-card class="pa-5">
      <v-card-title>Password</v-card-title>
      <v-card-subtitle>Change current password</v-card-subtitle>
      <v-card-text>
        <ChangePasswordForm/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ChangePasswordForm from "@/components/profile/form/ChangePasswordForm";
export default {
  name: "ChangePasswordModal",
  components: {ChangePasswordForm},
  data: () => ({
    isDialogVisible: false
  }),
}
</script>

<style scoped>

</style>