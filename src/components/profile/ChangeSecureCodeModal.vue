<template>
  <v-btn
      class="text-none"
      size="large"
      block
      color="grey-lighten-2"
      @click="isDialogVisible = true"
  >
    Secure Code
  </v-btn>
  <v-dialog
      v-model="isDialogVisible"
      max-width="550px"
  >
    <v-card class="pa-5">
      <v-card-title>Secure Code</v-card-title>
      <v-card-subtitle>Change current security code</v-card-subtitle>
      <v-card-text>
        <ChangeSecureCodeForm/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ChangeSecureCodeForm from "@/components/profile/form/ChangeSecureCodeForm";

export default {
  name: "ChangeSecureCodeModal",
  components: {ChangeSecureCodeForm},
  data: () => ({
    isDialogVisible: false
  }),
}
</script>

<style scoped>

</style>