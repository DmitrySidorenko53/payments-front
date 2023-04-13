<template>
  <v-text-field
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.length, rules.isNumeric]"
      :type="show ? 'text' : 'password'"
      :value="secureCode"
      @input="secureCode = $event.target.value"
      label="Secure Code"
      class="input-group--focused mt-3"
      prepend-inner-icon="mdi-account-lock-outline"
      @click:append-inner="show = !show"
  ></v-text-field>
</template>

<script>
export default {
  name: "SecureCodeInput",
  data() {
    return {
      show: false,
      secureCode: '',
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 6 || 'Secure code length must not be less than 6 numbers',
        isNumeric: v => !v.match(/[^0-9]/g) || 'Secure code must contain only digits'
      },
    }
  },
}
</script>

<style scoped>

</style>