<template>
  <v-row class="mt-3">
    <v-col cols="12" md="6" lg="4"
           v-for="item in cardReqs" :key="item.id"
    >
      <CardRequest :item="item" :banks="banks"/>
    </v-col>
  </v-row>
</template>

<script>
import RequestButtons from "@/components/controls/button/RequestButtons";
import CardRequest from "@/components/manager/CardRequest";
export default {
  name: "CardRequests",
  components: {RequestButtons, CardRequest},
  props: {
    cardReqs: {
      type: Array
    },
    dateOptions: {
      type: Object
    },
    banks: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>