<template>
  <v-card elevation="0" class="overflow-auto" height="750px">
    <v-card-title>
      Cards Requests
    </v-card-title>
    <v-card-text>
      <v-row v-for="item in cardReqs" :key="cardReqs">
        <v-col cols="12">
          <CardRequest :item="item" :banks="banks"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import AccountRequest from "@/components/manager/AccountRequest";
import CardRequest from "@/components/manager/CardRequest";

export default {
  name: "CardsRequestsList",
  components: {CardRequest, AccountRequest},
  props: {
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