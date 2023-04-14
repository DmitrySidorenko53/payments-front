<template>
  <v-card elevation="0" class="overflow-auto" height="750px">
    <v-card-title>
      Account Requests
    </v-card-title>
    <v-card-text>
      <v-row v-for="item in accountReqs" :key="item.id">
        <v-col cols="12">
          <AccountRequest :item="item" :banks="banks"/>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import AccountRequest from "@/components/manager/AccountRequest";
export default {
  name: "AccountRequestsList",
  components: {AccountRequest},
  props: {
    accountReqs: {
      type: Array
    },
    banks: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>