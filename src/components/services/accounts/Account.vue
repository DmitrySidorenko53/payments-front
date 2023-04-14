<template>
  <v-card class="text-white"
          style=" background-image: linear-gradient(to right top, #b9f829, #c1d705, #c1b800, #bb9900, #ae7d0f);">
    <v-card-title>
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar :image="item.bankLogo"></v-avatar>
          {{ item.title }}
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:append>
          {{ item.balance }}
        </template>
      </v-list-item>
      <v-list-item class="text-center">
        {{ item.number }}
      </v-list-item>
    </v-card-title>
    <v-card-subtitle>
      <v-list-item>
        <template v-slot:prepend>
          {{ item.openDate }}
        </template>
        <template v-slot:append>
          {{ item.currency }}
        </template>
      </v-list-item>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
      >
        Cards
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="showAccountCards ? 'mdi-chevron-up' : 'mdi-chevron-down'"
             @click="showAccountCards = !showAccountCards"
      >
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="showAccountCards">
        <v-divider></v-divider>
        <v-card-text>
          <Card v-for="card in cards" :key="card.id" :card="card" class="mb-3"/>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Card from "@/components/home/Card";
import CardsList from "@/components/services/cards/CardsList";

export default {
  name: "Account",
  components: {CardsList, Card},
  data: () => ({
    showAccountCards: false
  }),
  props: {
    item: {
      type: Object
    },
    cards: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>