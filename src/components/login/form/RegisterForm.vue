<template>
  <v-form @submit.prevent="" ref="register">
    <FullNameInput/>
    <EmailInput/>
    <PasswordInput/>
    <PhoneInput/>
    <v-row>
      <v-col cols="12" md="6">
        <PersonalDataCheckBox/>
      </v-col>
      <v-col cols="6" md="3">
        <SubmitButton
            :open-new-secure-dialog="openNewSecureDialog"
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
import FullNameInput from "@/components/controls/input/FullNameInput";
import PersonalDataCheckBox from "@/components/controls/checkbox/PersonalDataCheckBox";
import PhoneInput from "@/components/controls/input/PhoneInput";

export default {
  name: "RegisterForm",
  components: {
    PhoneInput,
    PersonalDataCheckBox,
    FullNameInput, StayInSystemCheckBox, ResetButton, SubmitButton, PasswordInput, EmailInput
  },
  data: () => ({
    openNewSecureDialog: true
  }),
  methods: {
    async isValid() {
      return await this.$refs.login.validate()
    },
  }
}
</script>

<style scoped>

</style>