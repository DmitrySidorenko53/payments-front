<template>
  <v-card>
    <v-row class="mx-auto" justify="center">
      <v-col cols="12" sm="10" md="8" lg="5" xl="4">
        <AccountsList :accounts="accounts" :banks="banks" :cards="cards"/>
      </v-col>
      <v-col cols="12" md="6" lg="7" xl="4">
        <AccountRequestForm/>
      </v-col>
      <v-col cols="12" md="6" lg="12" xl="4">
        <AccountRequestsList :accountReqs="accountReqs" :banks="banks"/>
      </v-col>
    </v-row>
  </v-card>

</template>

<script>
import AccountsList from "@/components/services/accounts/AccountsList";
import AccountRequestForm from "@/components/services/accounts/AccountRequestForm";
import AccountRequestsList from "@/components/services/accounts/AccountRequestsList";

export default {
  name: "Accounts",
  components: {AccountRequestsList, AccountRequestForm, AccountsList},
  props: {
    accountReqs: {
      type: Array
    },
    accounts: {
      type: Array
    },
    cards: {
      type: Array
    },
    banks: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>