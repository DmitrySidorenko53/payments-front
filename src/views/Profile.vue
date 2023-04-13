<template>
  <v-card v-if="isAuth" elevation="8">
    <v-row class="pa-10" justify="center">
      <v-col cols="12" md="3" class="pt-8 ps-5" align="center">
        <Avatar :full-name="fullName" :email="email"/>
        <Actions/>
      </v-col>
      <v-col cols=12 md="6" lg="7">
        <UserDetails/>
      </v-col>
      <v-col cols="12" md="3" lg="2">
        <ServicesLinks/>
      </v-col>
    </v-row>
  </v-card>
  <div v-else>You are not auth!</div>
</template>

<script>
import Avatar from "@/components/profile/Avatar";
import UserDetails from "@/components/profile/UserDetails";
import Actions from "@/components/profile/Actions";
import ServicesLinks from "@/components/profile/ServicesLinks";

export default {
  name: "Profile",
  components: {Actions, Avatar, UserDetails, ServicesLinks},
  data: () => ({
    fullName: 'Dmitry Sidorenko',
    email: 'dimasidorenko@53gmail.com',
  }),
  props: {
    isAuth: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>