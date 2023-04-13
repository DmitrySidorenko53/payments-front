<template>
  <v-sheet v-if="openNewSecureDialog">
    <v-btn
        @click="registerSecureDialog = true"
        block
        class="mt-2 mb-4 text-none"
        color="green-darken-3"
    >
      Submit
    </v-btn>
    <v-dialog v-model="registerSecureDialog"
              max-width="550px">
      <v-card class="pa-5">
        <v-card-title>
          Registration
        </v-card-title>
        <v-card-subtitle>Specify your personal secure code</v-card-subtitle>
        <v-card-text>
          <SecureRegisterForm/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>

  <v-sheet v-else-if="openSecureDialog">
    <v-btn
        @click="loginSecureDialog = true"
        block
        class="mt-2 mb-4 text-none"
        color="green-darken-3"
    >
      Submit
    </v-btn>
    <v-dialog v-model="loginSecureDialog"
              max-width="550px">
      <v-card class="pa-5">
        <v-card-title>
          Login
        </v-card-title>
        <v-card-subtitle>
          Your personal secure code specified during registration
        </v-card-subtitle>
        <v-card-text>
          <SecureLoginForm/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>

  <v-sheet v-else>
    <v-btn
        type="submit"
        block class="mt-2 mb-4 text-none"
        color="green-darken-3"
    >
      Submit
    </v-btn>
  </v-sheet>
</template>

<script>
import SecureRegisterForm from "@/components/login/form/SecureRegisterForm";
import SecureLoginForm from "@/components/login/form/SecureLoginForm";

export default {
  name: "SubmitButton",
  components: {SecureRegisterForm, SecureLoginForm},
  data: () => ({
    registerSecureDialog: false,
    loginSecureDialog: false,
  }),
  props: {
    openNewSecureDialog: {
      type: Boolean
    },
    openSecureDialog: {
      type: Boolean
    },
  }
}
</script>

<style scoped>

</style>