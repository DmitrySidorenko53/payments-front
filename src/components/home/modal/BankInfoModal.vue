<template>
  <v-btn icon="mdi-information-outline"
         @click="isDialogVisible = true"
  >
  </v-btn>
  <v-dialog v-model="isDialogVisible"
            max-width="500px"
  >
    <v-card>
      <v-img max-height="300px"
             :src="item.picture"
             cover
      ></v-img>
      <v-card-title>
        {{ item.title }}
      </v-card-title>
      <v-card-subtitle>
        <div class="mb-2">
          Foundation date - {{item.foundDate}}
        </div>
        <div class="overflow-x-auto py-4">Contacts<br/>{{item.contacts}}</div>
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="green-darken-3"
        >
          Learn More
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="showMore ? 'mdi-chevron-up' : 'mdi-chevron-down'"
               @click="showMore = !showMore"
        >
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="showMore">
          <v-divider></v-divider>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BankInfoModal",
  data: () => ({
    isDialogVisible: false,
    showMore: false,
    showContacts: false
  }),
  props: {
    item: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>