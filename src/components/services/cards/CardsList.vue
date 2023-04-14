<template>
  <v-card class="overflow-auto" height="750px" elevation="0">
    <v-card-text>
      <v-row v-for="card in cards" :key="card.id" justify="center">
        <v-col cols="10">
          <Card :card="card"/>
        </v-col>
        <v-col align-self="center" cols="1">
          <v-btn variant="text" icon="mdi-refresh" size="x-large">
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Card from "@/components/home/Card";

export default {
  name: "CardsList",
  components: {Card},
  props: {
    cards: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>