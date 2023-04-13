<template>
  <v-avatar
      size="180"
      rounded="1"
  >
    <v-img cover src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
  </v-avatar>
  <v-list-item class="mt-2"
               :title=fullName
               :subtitle=email
  ></v-list-item>
</template>

<script>
export default {
  name: "Avatar",

  props: {
    fullName: {
      type: String
    },
    email: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>