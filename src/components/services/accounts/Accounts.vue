<template>
  <v-card>
    <v-row class="mx-auto">
      <v-col cols="12" md="6">
        <AccountsList/>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <AccountRequestForm/>
          </v-col>
          <v-col cols="12">
            <AccountRequestsList/>
          </v-col>
        </v-row>
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
  components: {AccountRequestsList, AccountRequestForm, AccountsList}
}
</script>

<style scoped>

</style>