<template>
  <v-form @submit.prevent="" ref="manager-filter">
    <SelectRequestStatus/>
    <SelectBank/>
    <SelectPurpose/>
    <SelectPaymentSystem/>
    <v-row justify="end">
      <v-col cols="6" md="3">
        <SubmitWithoutConfirmation/>
      </v-col>
      <v-col cols="6" md="3">
        <ResetButton/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SelectRequestStatus from "@/components/controls/select/SelectRequestStatus";
import SelectBank from "@/components/controls/select/SelectBank";
import SelectPurpose from "@/components/controls/select/SelectPurpose";
import SelectPaymentSystem from "@/components/controls/select/SelectPaymentSystem";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "ManagerFilterForm",
  components: {
    SubmitWithoutConfirmation,
    SelectPaymentSystem, SelectPurpose, SelectBank, SelectRequestStatus, ResetButton, SubmitButton}
}
</script>

<style scoped>

</style>