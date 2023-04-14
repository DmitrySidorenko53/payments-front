<template>
  <v-card v-if="isAuth" elevation="5" height="800px" class="overflow-y-auto">
    <v-tabs
        v-model="tab"
        class="bg-green-darken-3"
        align-tabs="center"
    >
      <v-tab :value="1">Accounts</v-tab>
      <v-tab :value="2">Cards</v-tab>
      <v-tab :value="3">Payments</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1">
        <Accounts :accounts="accounts"
                  :accountReqs="accountReqs"
                  :banks="banks"
                  :cards="cards"/>
      </v-window-item>
      <v-window-item :value="2">
        <Cards :cards="cards"
               :cardReqs="cardReqs"
               :banks="banks"/>
      </v-window-item>
      <v-window-item :value="3">
        <Payments :payments="payments" :cards="cards"/>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import Accounts from "@/components/services/accounts/Accounts";
import Cards from "@/components/services/cards/Cards";
import Payments from "@/components/services/payments/Payments";

export default {
  name: "Services",
  components: {Payments, Cards, Accounts},
  data: () => ({
    tab: null,
  }),
  props: {
    isAuth: {
      type: Boolean
    },
    banks: {
      type: Array
    },
    cards: {
      type: Array
    },
    payments: {
      type: Array
    },
    cardReqs: {
      type: Array
    },
    accountReqs: {
      type: Array
    },
    accounts: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>