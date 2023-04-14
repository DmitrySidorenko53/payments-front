<template>
  <v-card class="bg-grey-lighten-3 text-white"
          style="  background-image: linear-gradient(to left top, #6b5f8b, #695c99, #6459a8, #5c56b7, #4f54c6);"
  >
    <v-card-title>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar :image="card.bankLogo" rounded="0"></v-avatar>
          <v-list-item-title
              class="text-sm-h5"
          >
            {{ card.bank }}
          </v-list-item-title>
        </template>
      </v-list-item>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-list-item class="w-100">
        <v-list-item-title class=" text-center font-weight-bold text-h5 text-sm-h3">
          {{ card.balance }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="w-100 mt-2">
        <v-row justify="space-between">
          <v-col class="text-start text-sm-h5" cols="8" sm="8">
            {{ card.cardNumber }}
          </v-col>
          <v-col class="text-end text-sm-h5" cols="4" sm="4">
            {{ card.validThrow }}
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item class="w-100">
        <template v-slot:append>
          <v-avatar :image="card.paymentsSystemLogo" rounded="0"
                    size="70"
          >
          </v-avatar>
        </template>
        <v-list-item-title class="text-start text-sm-h5">
          {{ card.owner }}
        </v-list-item-title>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>