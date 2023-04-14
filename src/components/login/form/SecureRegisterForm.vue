<template>
  <NewSecureCodeInput/>
  <v-row justify="end">
    <v-col cols="6" md="3">
      <SubmitWithoutConfirmation/>
    </v-col>
    <v-col cols="6" md="3">
      <ResetButton/>
    </v-col>
  </v-row>
</template>

<script>
import NewSecureCodeInput from "@/components/controls/input/NewSecureCodeInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "SecureRegisterForm",
  components: {SubmitWithoutConfirmation, NewSecureCodeInput, SubmitButton, ResetButton}
}
</script>

<style scoped>

</style>