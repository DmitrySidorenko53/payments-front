<template>
  <v-form @submit.prevent>
    <SecureCodeInput/>
    <v-row justify="end">
      <v-col cols="6" md="3">
        <SubmitButton :open-secure-dialog="false"/>
      </v-col>
      <v-col cols="6" md="3">
        <ResetButton/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import SecureCodeInput from "@/components/controls/input/SecureCodeInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";

export default {
  name: "SecureForm",
  components: {SecureCodeInput, SubmitButton, ResetButton}
}
</script>

<style scoped>

</style>