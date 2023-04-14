<template>
  <v-row class="mx-auto" justify="center">
    <v-col cols="12" sm="10" md="6" lg="5">
      <PaymentsList :payments="payments" :cards="cards"/>
    </v-col>
    <v-col cols="12" md="6" lg="7">
      <v-row>
        <v-col cols="12">
          <PaymentForm :cards="cards" :payments="payments"/>
        </v-col>
        <v-col cols="12">
          <TransferForm :cards="cards" :payments="payments"/>
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
  components: {TransferForm, PaymentForm, PaymentsList},
  props: {
    payments: {
      type: Array
    },
    cards: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>