<template>
  <SecureCodeInput/>
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
import SecureCodeInput from "@/components/controls/input/SecureCodeInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "SecureForm",
  components: {SubmitWithoutConfirmation, SecureCodeInput, SubmitButton, ResetButton}
}
</script>

<style scoped>

</style>