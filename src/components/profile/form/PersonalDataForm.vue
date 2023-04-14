<template>
  <v-form @submit.prevent class="mt-3">
    <FullNameInput/>
    <EmailInput/>
    <PhoneInput/>
    <AvatarInput/>
    <v-row justify="end">
      <v-col cols="6" sm="4">
        <SubmitWithoutConfirmation/>
      </v-col>
      <v-col cols="6" sm="4">
        <ResetButton/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import AvatarInput from "@/components/controls/input/AvatarInput";
import EmailInput from "@/components/controls/input/EmailInput";
import FullNameInput from "@/components/controls/input/FullNameInput";
import PhoneInput from "@/components/controls/input/PhoneInput";
import SubmitButton from "@/components/controls/button/SubmitButton";
import ResetButton from "@/components/controls/button/ResetButton";
import SubmitWithoutConfirmation from "@/components/controls/button/SubmitWithoutConfirmation";

export default {
  name: "PersonalDataForm",
  components: {SubmitWithoutConfirmation, PhoneInput, FullNameInput, EmailInput, AvatarInput, SubmitButton, ResetButton},
  data: () => ({

  })
}
</script>

<style scoped>

</style>