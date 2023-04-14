<template>
  <v-card class="overflow-auto" height="750px" elevation="0">
    <v-card-text>
      <v-row v-for="item in payments" :key="item.id" justify="center">
        <v-col cols="11">
          <Payment :item="item"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Payment from "@/components/home/Payment";

export default {
  name: "PaymentsList",
  components: {Payment},
  props: {
    payments: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>