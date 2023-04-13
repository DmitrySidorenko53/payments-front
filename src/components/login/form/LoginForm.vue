<template>
  <v-form @submit.prevent="" ref="login">
    <EmailInput/>
    <PasswordInput/>
    <v-row>
      <v-col cols="12" md="6">
        <StayInSystemCheckBox/>
      </v-col>
      <v-col cols="6" md="3">
        <SubmitButton
            :open-secure-dialog="openSecureDialog"
        />
      </v-col>
      <v-col cols="6" md="3">
        <ResetButton/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import EmailInput from "@/components/controls/input/EmailInput";
import PasswordInput from "@/components/controls/input/PasswordInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import StayInSystemCheckBox from "@/components/controls/checkbox/StayInSystemCheckBox";

export default {
  name: "LoginForm",
  components: {StayInSystemCheckBox, ResetButton, SubmitButton, PasswordInput, EmailInput},
  data: () => ({
    openSecureDialog: true
  }),
}
</script>

<style scoped>

</style>