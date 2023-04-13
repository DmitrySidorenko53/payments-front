<template>
  <v-container fluid>
    <v-app-bar
        color="green-darken-3"
        :elevation="10"
    >
      <v-app-bar-nav-icon
          @click.stop="isDrawerVisible = !isDrawerVisible"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>
        Banking App
      </v-app-bar-title>
      <template v-slot:append v-if="!isAuth">
        <LoginModal/>
      </template>
    </v-app-bar>
    <v-navigation-drawer
        v-model="isDrawerVisible"
        location="left"
        temporary
    >
      <v-list-item v-if="isAuth"
                   prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                   title="Dmitry Sidorenko"
                   class="mt-2 px-2"
                   nav>
        <template v-slot:append>
          <v-btn
              variant="text"
              icon="mdi-chevron-right"
              href="/profile"
          ></v-btn>
        </template>
      </v-list-item>
      <v-list-item v-else
                   prepend-icon="mdi-account-question-outline"
                   title="Unknown User"
                   class="mt-2 mx-2 px-2"
      >
      </v-list-item>
      <v-divider class="mt-2 mb-3"></v-divider>
      <v-list density="compact" nav>
        <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
            href="/"
        >
        </v-list-item>
        <v-list-item
            v-if="isAuth"
            prepend-icon="mdi-clipboard-file"
            title="Manager Panel"
            value="manager"
            href="/manager"
        >
        </v-list-item>
        <v-list-item
            v-if="isAuth"
            prepend-icon="mdi-apps"
            title="Services"
            value="services"
            href="/services"
        >
        </v-list-item>

        <v-list-item
            prepend-icon="mdi-cog-outline"
            title="Settings"
            value="Settings"
            href="/Settings"
        >
        </v-list-item>
        <v-list-item
            prepend-icon="mdi-information-outline"
            title="About"
            value="about"
            href="/about"
        >
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="isAuth">
        <div class="pa-5 text-end">
          <v-btn
              type="button"
              prepend-icon="mdi-account-cancel-outline"
              class="text-none"
              color="red-darken-4"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

import LoginModal from "@/components/login/LoginModal";

export default {
  name: "Navigation",
  components: {LoginModal},
  data: () => ({
    group: null,
    isDrawerVisible: false,
  }),
  watch: {
    group() {
      this.isDrawerVisible = false
    }
  },
  props: {
    isAuth: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>