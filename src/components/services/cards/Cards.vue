<template>
  <v-row class="mx-auto">
    <v-col cols="12" md="6">
      <CardsList/>
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <CardsRequestForm/>
        </v-col>
        <v-col cols="12">
          <CardsRequestsList/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CardsList from "@/components/services/cards/CardsList";
import CardsRequestForm from "@/components/services/cards/CardsRequestForm";
import CardsRequestsList from "@/components/services/cards/CardsRequestsList";
export default {
  name: "Cards",
  components: {CardsRequestsList, CardsRequestForm, CardsList}
}
</script>

<style scoped>

</style>