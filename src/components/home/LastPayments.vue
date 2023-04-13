<template>
  <v-card elevation="3" class="ma-3 overflow-auto" height="400px">
    <v-card-title class="bg-green-darken-3 mb-3 text-center">
      LAST PAYMENTS
    </v-card-title>
    <v-card-text>
      <v-row v-for="item in payments" :key="item.id">
        <Payment :item="item"/>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Payment from "@/components/home/Payment";

export default {
  name: "LastPayments",
  components: {Payment},
  props: {
    payments: {
      type: Array
    },

  }
}
</script>

<style scoped>

</style>