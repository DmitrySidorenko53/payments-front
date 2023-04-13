<template>
  <v-select
      clearable
      chips
      label="Purpose"
      :items="items"
      multiple
  >
  </v-select>
</template>

<script>
export default {
  name: "SelectPurpose",
  data: () => ({
    values: [],
    items: ['Commercial', 'Individual']
  })
}
</script>

<style scoped>

</style>