<template>
  <v-checkbox
      v-model="checkbox"
      label="Send Check To Email?"
      required
  ></v-checkbox>
</template>

<script>
export default {
  name: "SendCheckToEmail",
  data: () =>({
    checkbox: false
  })
}
</script>

<style scoped>

</style>