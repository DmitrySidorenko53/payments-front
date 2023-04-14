<template>
  <v-form @submit.prevent>
    <PasswordInput/>
    <NewPasswordInput/>
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
import PasswordInput from "@/components/controls/input/PasswordInput";
import NewPasswordInput from "@/components/controls/input/NewPasswordInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "ChangePasswordForm",
  components: {SubmitWithoutConfirmation, NewPasswordInput, PasswordInput, SubmitButton, ResetButton}
}
</script>

<style scoped>

</style>