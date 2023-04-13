<template>
  <v-card elevation="3" class="ma-3" height="450px">
    <v-card-title class="bg-green-darken-3 mb-3 text-center">
      CURRENCIES RATES
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="item in rates" :key="item.id"
                     class="bg-grey-lighten-4 my-2"
                     :prepend-avatar="item.logo"
                     lines="one"
        >
          <ExchangeRate :item="item"/>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ExchangeRate from "@/components/home/ExchangeRate";

export default {
  name: "ExchangeRates",
  components: {ExchangeRate},
  data: () => ({}),
  props: {
    rates: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>