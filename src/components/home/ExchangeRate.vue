<template>
  <v-row>
    <v-col cols="6">
      {{ item.scale }} {{ item.title }}
    </v-col>
    <v-col cols="3">
      {{ item.buy }}
    </v-col>
    <v-col cols="3">
      {{ item.sale }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ExchangeRate",
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>