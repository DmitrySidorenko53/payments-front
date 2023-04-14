<template>
  <v-card elevation="0">
    <v-card-title>
      Card Request
    </v-card-title>
    <v-card-subtitle>
      Fill the form
    </v-card-subtitle>
    <v-card-text>
      <v-form @submit.prevent>
        <FullNameInput/>
        <EmailInput/>
        <SelectBank/>
        <SelectPaymentSystem/>
        <v-row>
          <v-col cols="12" md="6">
            <PersonalDataCheckBox/>
          </v-col>
          <v-col cols="6" md="3">
            <SubmitWithoutConfirmation/>
          </v-col>
          <v-col cols="6" md="3">
            <ResetButton/>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import EmailInput from "@/components/controls/input/EmailInput";
import FullNameInput from "@/components/controls/input/FullNameInput";
import SelectBank from "@/components/controls/select/SelectBank";
import SelectPaymentSystem from "@/components/controls/select/SelectPaymentSystem";
import PersonalDataCheckBox from "@/components/controls/checkbox/PersonalDataCheckBox";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "CardsRequestForm",
  components: {
    SubmitWithoutConfirmation,
    ResetButton,
    SubmitButton, PersonalDataCheckBox, SelectPaymentSystem, SelectBank, FullNameInput, EmailInput}
}
</script>

<style scoped>

</style>