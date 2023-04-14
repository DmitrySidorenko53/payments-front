<template>
  <v-sheet v-if="openNewSecureDialog">
    <v-btn
        @click="registerSecureDialog = true"
        type="submit"
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
          <v-form onsubmit="this.registerSecureDialog = false">
            <SecureRegisterForm/>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>

  <v-sheet v-else-if="openSecureDialog">
    <v-btn
        @click="loginSecureDialog = true"
        type="submit"
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
          <v-form onsubmit="this.loginSecureDialog = false">
            <SecureLoginForm/>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>

  <v-sheet v-else-if="openPaymentDetails">
    <v-btn
        @click="paymentDetails = true"
        type="submit"
        block
        class="mt-2 mb-4 text-none"
        color="green-darken-3"
    >
      Submit
    </v-btn>
    <v-dialog v-model="paymentDetails"
              max-width="550px">
      <v-form onsubmit="this.paymentDetails = false">
        <PaymentDetailsModal :payment="payment"/>
      </v-form>
    </v-dialog>
  </v-sheet>

  <v-sheet v-else-if="openTransferDetails">
    <v-btn
        @click="transferDetails = true"
        type="submit"
        block
        class="mt-2 mb-4 text-none"
        color="green-darken-3"
    >
      Submit
    </v-btn>
    <v-dialog v-model="transferDetails"
              max-width="550px">
      <v-form onsubmit="this.transferDetails = false">
        <TransferDetailsModal :payment="payment"/>
      </v-form>
    </v-dialog>
  </v-sheet>
</template>

<script>
import SecureRegisterForm from "@/components/login/form/SecureRegisterForm";
import SecureLoginForm from "@/components/login/form/SecureLoginForm";
import PaymentDetailsModal from "@/components/services/payments/modal/PaymentDetailsModal";
import TransferDetailsModal from "@/components/services/payments/modal/TransferDetailsModal";

export default {
  name: "SubmitButton",
  components: {TransferDetailsModal, PaymentDetailsModal, SecureRegisterForm, SecureLoginForm},
  data: () => ({
    registerSecureDialog: false,
    loginSecureDialog: false,
    paymentDetails: false,
    transferDetails: false
  }),
  props: {
    openNewSecureDialog: {
      type: Boolean
    },
    openSecureDialog: {
      type: Boolean
    },
    openTransferDetails: {
      type: Boolean
    },
    openPaymentDetails: {
      type: Boolean
    },
    payment: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>