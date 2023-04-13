<template>
  <v-form>
    <NewSecureCodeInput/>
    <v-row justify="end">
      <v-col cols="6" md="3">
        <SubmitButton :open-new-secure-dialog="false"/>
      </v-col>
      <v-col cols="6" md="3">
        <ResetButton/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import NewSecureCodeInput from "@/components/controls/input/NewSecureCodeInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";

export default {
  name: "SecureRegisterForm",
  components: {NewSecureCodeInput, SubmitButton, ResetButton}
}
</script>

<style scoped>

</style>