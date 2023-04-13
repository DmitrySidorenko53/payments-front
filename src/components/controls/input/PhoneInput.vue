<template>
  <v-text-field
      :rules="[rules.required, rules.length]"
      :value="phone"
      @input="phone = $event.target.value"
      clearable
      label="Phone Number"
      prepend-inner-icon="mdi mdi-phone"
  ></v-text-field>
</template>

<script>
export default {
  name: "PhoneInput",
  data: () => ({
    phone: '',
    rules: {
      required: v => !!v || 'Required',
      length: v => (v.length >= 5 && v.length <= 15) ||
          'Phone number length must be between 5 and 15 numbers',
    }
  }),
}
</script>

<style scoped>

</style>