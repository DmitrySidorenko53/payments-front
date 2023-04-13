<template>
  <v-banner
      :avatar="item.bankLogo"
      class="bg-grey-lighten-4 my-2 mx-2"
  >
    <v-banner-text>
      <v-list-item
          href="/services"
      >
        <template v-slot:prepend>
          <div class="text-h5">
            {{ item.title }}
          </div>
        </template>
        <template v-slot:append>
          <div>
            {{ item.date }}
          </div>
        </template>
      </v-list-item>
      <v-list-item>
        <template v-slot:prepend>
          {{ item.cardNumber }}
        </template>
        <template v-slot:append>
          <div class="text-h5">
            {{ item.value }}
          </div>
        </template>
      </v-list-item>
    </v-banner-text>
  </v-banner>
</template>

<script>
export default {
  name: "Payment",
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>