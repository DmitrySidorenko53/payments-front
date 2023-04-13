<template>
  <v-row class="mx-auto">
    <v-col cols="12" md="6">
      <PaymentsList/>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <PaymentForm/>
        </v-col>
        <v-col col="12">
          <TransferForm/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import PaymentsList from "@/components/services/payments/PaymentsList";
import PaymentForm from "@/components/services/payments/PaymentForm";
import TransferForm from "@/components/services/payments/TransferForm";

export default {
  name: "Payments",
  components: {TransferForm, PaymentForm, PaymentsList}
}
</script>

<style scoped>

</style>