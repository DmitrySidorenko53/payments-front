<template>
  <v-select
      clearable
      chips
      label="Banks"
      :items="items"
  >
  </v-select>
</template>

<script>
export default {
  name: "SelectBank",
  data: () => ({
    values: [],
    items: ['BSB', 'Belarusbank', 'VTB', 'Alphabank',
        'MTB', 'Belagroprombank']
  })
}
</script>

<style scoped>

</style>