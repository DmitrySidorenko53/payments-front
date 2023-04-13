<template>
  <v-row justify="space-between" class="mb-3">
    <v-col>
      <ManagerFilterModal/>
    </v-col>
    <v-col>
      <SearchBar/>
    </v-col>
  </v-row>
</template>

<script>
import SearchBar from "@/components/controls/SearchBar";
import ManagerFilterModal from "@/components/manager/ManagerFilterModal";

export default {
  name: "ToolBar",
  components: {SearchBar, ManagerFilterModal}
}
</script>

<style scoped>

</style>