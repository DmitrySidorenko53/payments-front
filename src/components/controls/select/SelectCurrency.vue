<template>
  <v-select
      clearable
      label="Currency"
      :items="items"
      prepend-inner-icon="mdi-currency-usd"
      :rules=[rules.required]
  >
  </v-select>
</template>

<script>
export default {
  name: "SelectCurrency",
  data: () => ({
    values: [],
    items: ['USD', 'EUR', 'RUB', 'PLN',
      'CAD', 'CNY'],
    rules: {
      required: v => !!v || 'Required',
    }
  })
}
</script>

<style scoped>

</style>