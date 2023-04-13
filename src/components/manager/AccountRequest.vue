<template>
  <v-card class="pa-5" color="grey-lighten-4" elevation="3">
    <v-card-item>
      <template v-slot:title>
        <v-avatar
            image="https://randomuser.me/api/portraits/men/85.jpg"
            size="70"
        ></v-avatar>
        {{ item.userEmail }}
      </template>
      <template v-slot:subtitle>
      </template>
      <v-card-text>
        <v-row class="mb-3">
          <v-col cols="12" sm="6" lg="12" xl="7">
            <h2 class="font-weight-bold">{{ item.purpose }}</h2>
          </v-col>
          <v-col cols="12" sm="6" lg="12" xl="5">
            <h3 class="font-weight-bold d-flex">{{ item.status }}</h3>
          </v-col>
        </v-row>
        <p>{{ item.date.toLocaleDateString("en-US", dateOptions) }}</p>
      </v-card-text>
      <v-card-actions>
        <v-avatar
            :image="banks[Math.floor(Math.random()*banks.length)].logo"
            class="me-3"
            size="40"
        >
        </v-avatar>
        {{ item.bank }}
        <v-spacer/>
        <RequestButtons/>
      </v-card-actions>
    </v-card-item>
  </v-card>
</template>

<script>
import RequestButtons from "@/components/controls/button/RequestButtons";
export default {
  name: "AccountRequest",
  components: {RequestButtons},
  props: {
    item: {
      type: Object
    },
    banks: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>