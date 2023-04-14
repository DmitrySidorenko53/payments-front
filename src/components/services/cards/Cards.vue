<template>
  <v-row class="mx-auto" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="5">
      <CardsList :cards="cards"/>
    </v-col>
    <v-col cols="12" md="6" lg="6" xl="3">
      <CardsRequestForm/>
    </v-col>
    <v-col cols="12" md="6" lg="12" xl="4">
      <CardsRequestsList :cardReqs="cardReqs" :banks="banks"/>
    </v-col>
  </v-row>
</template>

<script>
import CardsList from "@/components/services/cards/CardsList";
import CardsRequestForm from "@/components/services/cards/CardsRequestForm";
import CardsRequestsList from "@/components/services/cards/CardsRequestsList";

export default {
  name: "Cards",
  components: {CardsRequestsList, CardsRequestForm, CardsList},
  props: {
    cards: {
      type: Array
    },
    cardReqs: {
      type: Array
    },
    banks: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>