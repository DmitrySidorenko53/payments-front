<template>
  <v-card elevation="0">
    <v-card-title class="text-center bg-green-darken-3">
      Links
    </v-card-title>
    <v-card-text>
      <v-row class="mt-3 mt-md-7" justify="center">
        <v-col cols="4" md="12" align="center">
          <v-btn icon="mdi mdi-bank-plus" href="/services" color="green-darken-3"></v-btn>
        </v-col>
        <v-col cols="4" md="12" align="center">
          <v-btn icon="mdi-account-cash-outline" href="/services" color="green-darken-3"></v-btn>
        </v-col>
        <v-col cols="4" md="12" align="center">
          <v-btn icon="mdi-currency-usd" href="/services" color="green-darken-3"></v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ServicesLinks"
}
</script>

<style scoped>

</style>