<template>
  <v-window v-if="isAuth"
            v-model="window"
            show-arrows="hover"
  >
    <v-card>
      <v-window-item>
        <v-card-title class="bg-green-darken-3 text-center">Account Requests</v-card-title>
        <v-card-text>
          <AccountRequests :accountReqs="accountReqs" :dateOptions="dateOptions" :banks="banks"/>
        </v-card-text>
      </v-window-item>
    </v-card>
    <v-card>
      <v-window-item>
        <v-card-title class="bg-green-darken-3 text-center">Card Requests</v-card-title>
        <v-card-text>
          <CardsRequests :cardReqs="cardReqs" :dateOptions="dateOptions" :banks="banks"/>
        </v-card-text>
      </v-window-item>
    </v-card>

  </v-window>
</template>

<script>
import AccountRequests from "@/components/manager/AccountRequests";
import Cards from "@/components/home/Cards";
import CardsRequests from "@/components/manager/CardRequests";

export default {
  name: "RequestsLists",
  components: {CardsRequests, Cards, AccountRequests},
  data: () => ({
    window: 0,
    dateOptions:
        {
          weekday: 'long', hour: 'numeric', minute: 'numeric',
          month: 'long', day: 'numeric',
        }
  }),
  props: {
    banks: {
      type: Array
    },
    cardReqs: {
      type: Array
    },
    accountReqs: {
      type: Array
    },
    isAuth: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>