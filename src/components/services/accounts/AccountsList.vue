<template>
  <v-card class="overflow-auto" height="750px" elevation="0">
    <v-card-text>
      <v-row v-for="item in accounts" :key="item.id" justify="center">
        <v-col cols="11">
          <Account :item="item" :cards="cards"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Account from "@/components/services/accounts/Account";

export default {
  name: "AccountsList",
  components: {Account},
  props: {
    accounts: {
      type: Array
    },
    cards: {
      type: Array
    },
    banks: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>