<template>
<v-row>
  <v-col cols="12" sm="6">
    <v-text-field
        :rules="[rules.required, rules.length]"
        :value="firstName"
        @input="firstName = $event.target.value"
        clearable
        label="First Name"
        prepend-inner-icon="mdi-clipboard-account-outline"
    ></v-text-field>
  </v-col>
  <v-col cols="12" sm="6">
    <v-text-field
        :rules="[rules.required, rules.length]"
        :value="lastName"
        @input="lastName = $event.target.value"
        clearable
        label="Last Name"
        prepend-inner-icon="mdi-clipboard-account-outline"
    ></v-text-field>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: "FullNameInput",
  data: () => ({
    firstName: '',
    lastName: '',
    rules: {
      required: v => !!v || 'Required',
      length: v => (v.length >= 2 && v.length <= 50) ||
          'Length must be between 2 and 50 characters',
    }
  }),
}
</script>

<style scoped>

</style>