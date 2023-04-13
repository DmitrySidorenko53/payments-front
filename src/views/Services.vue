<template>
  <v-card elevation="5">
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
        <Accounts/>
      </v-window-item>
      <v-window-item :value="2">
        <Cards/>
      </v-window-item>
      <v-window-item :value="3">
        <Payments/>
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
    }
  }
}
</script>

<style scoped>

</style>