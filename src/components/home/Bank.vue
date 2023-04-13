<template>
  <v-banner class="bg-grey-lighten-4"
            lines="three" :avatar="item.logo"
  >
    <v-banner-text>
      <div class="font-weight-bold">{{ item.title }}</div>
      <div class="font-weight-bold">Foundation Date - {{ item.foundDate }}</div>
    </v-banner-text>
    <v-banner-actions>
      <div class="mt-2">{{ item.contacts }}</div>
      <v-spacer></v-spacer>
      <BankInfoModal :item="item"/>
    </v-banner-actions>
  </v-banner>
</template>

<script>
import BankInfoModal from "@/components/home/modal/BankInfoModal";

export default {
  name: "Bank",
  components: {BankInfoModal},
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>