<template>
  <v-text-field
      :loading="loading"
      density="comfortable"
      clearable
      label="Search"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:appendInner="load"
      variant="solo"
      bg-color="grey-lighten-5"
  ></v-text-field>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    loaded: false,
    loading: false
  }),
  methods: {
    load () {
      this.loading = true

      setTimeout( () => {
        this.loading = false
        this.loaded =true
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>