<template>
  <v-text-field
      :rules="[rules.required, rules.isNumeric]"
      :value="value"
      @input="value = $event.target.value"
      label="Sum"
      class="input-group--focused"
      prepend-inner-icon=" mdi-sigma"
      clearable="clearable"
  ></v-text-field>
</template>

<script>
export default {
  name: "OperationSumInput",
  data() {
    return {
      show: false,
      value: '',
      rules: {
        required: v => !!v || 'Required',
        isNumeric: v => !v.match(/[^0-9]/g) || 'Sum must contain only digits'
      },
    }
  },
}
</script>

<style scoped>

</style>