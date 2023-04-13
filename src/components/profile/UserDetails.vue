<template>
  <v-card elevation="0">
    <v-card-title class="text-center bg-green-darken-3">
      Personal Data
    </v-card-title>
    <v-card-text>
      <PersonalDataForm/>
    </v-card-text>
  </v-card>
</template>

<script>
import PersonalDataForm from "@/components/profile/form/PersonalDataForm";

export default {
  name: "UserDetails",
  components: {PersonalDataForm},
  props: {
    fullName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>