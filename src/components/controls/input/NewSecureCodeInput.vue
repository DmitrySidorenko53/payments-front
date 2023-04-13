<template>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length, rules.isNumeric]"
      :type="show ? 'text' : 'password'"
      :value="newCode"
      @input="newCode = $event.target.value"
      label="New Code"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-account-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length, rules.isNumeric, confirmationRules.match]"
      :type="show ? 'text' : 'password'"
      :value="confirmCode"
      @input="confirmCode = $event.target.value"
      label="Confirm Code"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-account-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  name: "NewSecureCodeInput",
  data() {
    return {
      show: false,
      newCode: '',
      confirmCode: '',
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 6 || 'Codes length must not be less than 6 numbers',
        isNumeric: v => !v.match(/[^0-9]/g) || 'Secure code must contain only digits'
      },
      confirmationRules: {
        match: v => v === this.newCode || 'Codes must match'
      }
    }
  },
}
</script>

<style scoped>

</style>