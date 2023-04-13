<template>
  <v-btn
      prepend-icon="mdi-account-arrow-right-outline"
      class="text-none"
      size="large"
      @click="isDialogVisible = true"
  >
    Login
  </v-btn>
  <v-dialog
      v-model="isDialogVisible"
      max-width="550px"
  >
    <LoginModalContent/>
  </v-dialog>
</template>

<script>
import LoginModalContent from "@/components/login/LoginModalContent";

export default {
  name: "LoginModal",
  components: {LoginModalContent},
  data: () => ({
    isDialogVisible: false
  }),
  props: {
    isAuth: {
      type: Boolean
    }
  },
  mounted() {
    this.isDialogVisible = !this.isAuth
  }
}
</script>

<style scoped>

</style>