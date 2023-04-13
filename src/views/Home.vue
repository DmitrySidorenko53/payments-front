<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" md="7" lg="6" xl="5" class="w-100">
        <Cards v-if="isAuth" :cards="cards"/>
      </v-col>
      <v-col cols="12" md="5" lg="6" xl="7">
        <LastPayments v-if="isAuth" :payments="payments"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="8">
        <Banks :banks="banks"/>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <ExchangeRates :rates="rates"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ExchangeRates from "@/components/home/ExchangeRates";
import Cards from "@/components/home/Cards";
import LastPayments from "@/components/home/LastPayments";
import Banks from "@/components/home/Banks";

export default {
  name: "Home",
  components: {Banks, LastPayments, Cards, ExchangeRates},
  data: () => ({
    rates: [
      {
        id: 1,
        title: 'USD',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png',
        buy: 2.95,
        sale: 2.92,
        scale: 1,
      },
      {
        id: 2,
        title: 'EUR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png',
        buy: 3.20,
        sale: 3.02,
        scale: 1,
      },
      {
        id: 3,
        title: 'RUB',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png',
        buy: 3.61,
        sale: 3.32,
        scale: 100,
      },
      {
        id: 4,
        title: 'PLN',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png',
        buy: 6.91,
        sale: 6.72,
        scale: 10,
      },
      {
        id: 5,
        title: 'CAD',
        logo: 'https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg',
        buy: 2.19,
        sale: 2.15,
        scale: 1,
      },
      {
        id: 6,
        title: 'CNY',
        logo: 'https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg',
        buy: 4.30,
        sale: 4.10,
        scale: 10,
      },
    ],
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