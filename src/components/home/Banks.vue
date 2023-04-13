<template>
  <v-card elevation="3" class="ma-3 overflow-auto" height="450px">
    <v-card-title class="bg-green-darken-3 mb-3 text-center">
      BANKS
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="item in banks" :key="item.id" cols="12" lg="6">
          <Bank :item="item"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>

</template>

<script>
import BankInfoModal from "@/components/home/modal/BankInfoModal";
import Bank from "@/components/home/Bank";

export default {
  name: "Banks",
  components: {Bank, BankInfoModal},
  props: {
    banks: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>