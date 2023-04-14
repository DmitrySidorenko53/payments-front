<template>
  <v-card elevation="3" class="ma-3" height="400px">
    <v-card-title class="bg-green-darken-3 mb-3 text-center">
      CARDS
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="11">
          <v-window v-model="window" show-arrows="hover">
            <v-window-item
                v-for="card in cards" :key="card.id"
            >
              <Card :card="card" :ifAuth="ifAuth"/>
            </v-window-item>
          </v-window>
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
  name: "Cards",
  components: {Card},
  data: () => ({
    window: 0
  }),
  props: {
    cards: {
      type: Array
    },
    ifAuth: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>