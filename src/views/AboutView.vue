<template>
  <v-container class="movie-detail">
    <page-title text="About" />

    <p>
      This is sample project to show my Vue.js skill for companies
      <br />
      who would like to hire me.
      <br />
    </p>
    <p>
      It uses
      <a href="https://omdbapi.com/" target="_blank"
        >OMDb API</a
      >,
      Vuetify, Vuex, Axios.
    </p>

    <p>
      You can see the code on my
      <a href="https://github.com/Elfoslav/movies-vue" target="_blank">Github</a>.
    </p>
  </v-container>
</template>

<script>
import Vue from "vue";
import PageTitle from '../components/PageTitle';

export default Vue.extend({
  name: "AboutView",

  components: {
    PageTitle,
  },
});
</script>
