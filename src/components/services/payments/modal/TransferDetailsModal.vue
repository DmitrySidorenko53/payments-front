<template>
  <v-card>
    <v-card-title>
      {{ payment.title }}
    </v-card-title>
    <v-card-subtitle>
      Transfer
    </v-card-subtitle>
    <v-card-text>
      <v-list-item>
        <template v-slot:prepend>Sender</template>
        <template v-slot:append>
          {{ payment.cardNumber }}
          <v-avatar :image="payment.bankLogo"></v-avatar>
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:prepend>Receiver</template>
        <template v-slot:append>{{ payment.receiver }}
          <v-avatar :image="payment.bankLogo"></v-avatar>
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:prepend>Sum</template>
        <template v-slot:append>{{ payment.value }}</template>
      </v-list-item>
      <v-list-item>
        <template v-slot:prepend>Date</template>
        <template v-slot:append>{{ payment.date }}</template>
      </v-list-item>
    </v-card-text>
    <v-card-actions>
      <v-list-item>
        <SendCheckToEmail/>
        <SubmitWithoutConfirmation/>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import SendCheckToEmail from "@/components/controls/checkbox/SendCheckToEmail";
import SubmitButton from "@/components/controls/button/SubmitButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "TransferDetailsModal",
  components: {SubmitWithoutConfirmation, SubmitButton, SendCheckToEmail},
  props: {
    payment: {
      type: Object
    },
    transferDetails: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>