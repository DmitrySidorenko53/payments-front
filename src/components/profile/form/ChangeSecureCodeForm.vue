<template>
  <v-form @submit.prevent>
    <SecureCodeInput/>
    <NewSecureCodeInput/>
    <v-row justify="end">
      <v-col cols="6" md="3">
        <SubmitButton/>
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
import SecureCodeInput from "@/components/controls/input/SecureCodeInput";
import NewSecureCodeInput from "@/components/controls/input/NewSecureCodeInput";

export default {
  name: "ChangeSecureCodeForm",
  components: {NewSecureCodeInput, SecureCodeInput, SubmitButton, ResetButton},

}
</script>

<style scoped>

</style>