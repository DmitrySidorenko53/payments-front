<template>
  <v-text-field
      :rules="[rules.required, rules.length, rules.isNumeric]"
      :value="cardNumber"
      @input="cardNumber = $event.target.value"
      label="Card Number"
      class="input-group--focused"
      prepend-inner-icon="mdi-credit-card-minus"
      clearable="clearable"
  ></v-text-field>
</template>

<script>
export default {
  name: "SenderCardNumberInput",
  data() {
    return {
      show: false,
      cardNumber: '',
      rules: {
        required: v => !!v || 'Required',
        length: v => v.length >= 16 || 'Card number length must not be less than 16 numbers',
        isNumeric: v => !v.match(/[^0-9]/g) || 'Card number code must contain only digits'
      },
    }
  },
}
</script>

<style scoped>

</style>