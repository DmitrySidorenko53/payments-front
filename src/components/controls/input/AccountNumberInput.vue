<template>
  <v-text-field
      :rules="[rules.required, rules.length, rules.isNumeric]"
      :value="accountNumber"
      @input="accountNumber = $event.target.value"
      label="Account Number"
      class="input-group--focused"
      prepend-inner-icon="mdi-checkbook"
      clearable="clearable"
  ></v-text-field>
</template>

<script>
export default {
  name: "AccountNumberInput",
  data() {
    return {
      show: false,
      accountNumber: '',
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 16 || 'Account number length must not be less than 16 numbers',
        isNumeric: v => !v.match(/[^0-9]/g) || 'Account number code must contain only digits'
      },
    }
  },
}
</script>

<style scoped>

</style>