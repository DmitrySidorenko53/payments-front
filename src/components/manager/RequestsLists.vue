<template>
  <v-window
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
    accountReqs: [
      {
        id: 1, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Commercial',
        status: 'Accepted', bank: 'Belarusbank',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 2, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 3, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Commercial',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 4, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 5, userEmail: 'dimasidorenko53@gmai.com',
        purpose: 'Individual',
        status: 'Accepted', bank: 'VTB',
        date: new Date("December 17, 1995 03:24:00")
      },
    ],
    cardReqs: [
      {
        id: 1, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'VISA',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 2, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'MasterCard',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 3, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'VISA',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 4, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'Maestro',
        date: new Date("December 17, 1995 03:24:00")
      },
      {
        id: 5, userEmail: 'dimasidorenko53@gmai.com',
        status: 'Rejected', bank: 'VTB', paymentSystem: 'Mir',
        date: new Date("December 17, 1995 03:24:00")
      },
    ],
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
  }
}
</script>

<style scoped>

</style>