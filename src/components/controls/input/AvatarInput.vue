<template>
  <v-file-input class="mt-3"
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon=""
                prepend-inner-icon="mdi-camera"
                label="Avatar"
  ></v-file-input>
</template>

<script>
export default {
  name: "AvatarInput",
  data: () => ({
    rules: [
      value => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
      },
    ],
  }),
}
</script>

<style scoped>

</style>