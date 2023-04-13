<template>
  <v-select
      clearable
      chips
      label="Status"
      :items="items"
      multiple
  >
  </v-select>
</template>

<script>
export default {
  name: "SelectRequestStatus",
  data: () => ({
    values: [],
    items: ['Received', 'Accepted', 'Rejected']
  })
}
</script>

<style scoped>

</style>