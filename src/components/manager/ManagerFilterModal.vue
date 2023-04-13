<template>
  <v-btn icon="mdi-tune"
         color="green-darken-3"
         @click="isDialogVisible = true"
  >
  </v-btn>
  <v-dialog v-model="isDialogVisible"
            max-width="500px">
    <v-card>
      <v-card-title>Filters</v-card-title>
      <v-card-subtitle>Specify your filters</v-card-subtitle>
      <v-card-text>
        <ManagerFilterForm/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ManagerFilterForm from "@/components/manager/form/ManagerFilterForm";

export default {
  name: "ManagerFilterModal",
  components: {ManagerFilterForm},
  data: () => ({
    isDialogVisible: false
  }),
}
</script>

<style scoped>

</style>