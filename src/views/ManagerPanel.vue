<template>
  <ToolBar/>
  <RequestsLists :banks="banks"/>
</template>

<script>
import ToolBar from "@/components/manager/ToolBar";
import RequestsLists from "@/components/manager/RequestsLists";

export default {
  name: "ManagerPanel",
  components: {ToolBar, RequestsLists},
  props: {
    banks: {
      type: Array
    },
    cards: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>