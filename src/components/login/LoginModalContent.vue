<template>
  <v-card>
    <v-card-title>
      <v-tabs v-model="tab" grow bg-color="green-darken-3">
        <v-tab value="login" class="text">
          Login
        </v-tab>
        <v-tab value="register">
          Register
        </v-tab>
      </v-tabs>
    </v-card-title>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="login">
          <LoginForm/>
        </v-window-item>
        <v-window-item value="register">
          <RegisterForm/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

</template>

<script>
import LoginForm from "@/components/login/form/LoginForm";
import RegisterForm from "@/components/login/form/RegisterForm";

export default {
  name: "LoginModalContent",
  components: {RegisterForm, LoginForm},
  data: () => ({
    tab: null
  })
}
</script>

<style scoped>

</style>