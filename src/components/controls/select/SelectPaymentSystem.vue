<template>
  <v-select
      clearable
      chips
      label="Payment System"
      :items="items"
  >
  </v-select>
</template>

<script>
export default {
  name: "SelectPaymentSystem",
  data: () => ({
    values: [],
    items: ['VISA', 'Maestro', 'MasterCard', 'MIR']
  })
}
</script>

<style scoped>

</style>