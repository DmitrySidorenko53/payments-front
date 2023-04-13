<template>
  <v-card class="bg-grey-lighten-3 text-white"
          style="background-image: linear-gradient(45deg, #0045c7, #ff2c7d)"
  >
    <v-card-title>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar :image="item.bankLogo" rounded="0"></v-avatar>
          <v-list-item-title
              class="text-sm-h5"
          >
            {{ item.bank }}
          </v-list-item-title>
        </template>
      </v-list-item>
    </v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-list-item class="w-100">
        <v-list-item-title class=" text-center font-weight-bold text-h5 text-sm-h3">
          {{ item.balance }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="w-100 mt-2">
        <v-row justify="space-between">
          <v-col class="text-start text-sm-h5" cols="8" sm="8">
            {{ item.cardNumber }}
          </v-col>
          <v-col class="text-end text-sm-h5" cols="4" sm="4">
            {{ item.validThrow }}
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item class="w-100">
        <template v-slot:append>
          <v-avatar :image="item.paymentsSystemLogo" rounded="0"
                    size="70"
          >
          </v-avatar>
        </template>
        <v-list-item-title class="text-start text-sm-h5">
          {{ item.owner }}
        </v-list-item-title>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>