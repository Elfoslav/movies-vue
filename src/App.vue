<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center vuetify-logo">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/" @click.native="resetMovies">Home</router-link>
      </v-toolbar-title>
      <v-toolbar-title class="toolbar-link-divider">|</v-toolbar-title>
      <v-toolbar-title>
        <router-link to="/about">About</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="content">
        <v-row class="text-center">
          <v-col md="3"></v-col>
          <v-col md="6" class="mb-4">
            <router-view />
          </v-col>
          <v-col md="3"></v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center primary"
        cols="12"
      >
        <div class="white--text">
          {{ new Date().getFullYear() }} —
          <a href="https://github.com/Elfoslav" target="_blank">
            <strong>&copy; Elfoslav</strong>
          </a>
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),

  methods: {
    resetMovies() {
      this.$store.commit('movies/setMovies', []);
    },
  },
});
</script>

<style lang="scss">
.v-toolbar__title, .v-footer {
  a {
    color: white !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.toolbar-link-divider {
  margin: 0 5px;
}

.vuetify-logo {
  margin-right: 50px;
}
</style>
