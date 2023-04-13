<template>
  <v-row class="mt-1">
    <v-col cols="12">
<!--      <h2 class="text-center">Actions</h2>-->
      <v-list-item class="mt-4">
        <ChangePasswordModal/>
      </v-list-item>
      <v-list-item class="mt-3">
        <ChangeSecureCodeModal/>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import ChangePasswordModal from "@/components/profile/ChangePasswordModal";
import ChangeSecureCodeModal from "@/components/profile/ChangeSecureCodeModal";
export default {
  name: "Actions",
  components: {ChangeSecureCodeModal, ChangePasswordModal}
}
</script>

<style scoped>

</style>