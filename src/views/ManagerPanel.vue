<template>
  <ToolBar :isAuth="isAuth"/>
  <RequestsLists :isAuth="isAuth"
      :banks="banks"
      :account-reqs="accountReqs"
      :card-reqs="cardReqs"
  />
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
    },
    accountReqs: {
      type: Array
    },
    cardReqs: {
      type: Array
    },
    isAuth: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>