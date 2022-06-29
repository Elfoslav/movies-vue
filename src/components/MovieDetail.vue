<template>
  <v-container class="movie-detail">
    <page-title text="Movie detail" />
    <v-card
      v-if="movie"
      class="mx-auto pa-1"
      outlined
    >
      <v-list-item class="text-left">
        <v-list-item-avatar
          size="120"
        >
          <img :src="movie.Poster" />
        </v-list-item-avatar>
        <v-list-item-content class="ml-1">
          <v-list-item-title class="text-h5 mb-1">
            {{ movie.Title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <b>Runtime:</b>
            {{ movie.Runtime }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Genre:</b>
            {{ movie.Genre }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Language:</b>
            {{ movie.Language }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Year:</b>
            {{ movie.Year }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Actors:</b>
            {{ movie.Actors }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Director:</b>
            {{ movie.Director }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Country:</b>
            {{ movie.Country }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>IMDb Rating:</b>
            {{ movie.imdbRating }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <b>Plot:</b>
            {{ movie.Plot }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <p class="mt-2">
      <v-btn
        class="ma-2"
        outlined
        color="primary"
        @click="() => $router.go(-1)"
      >
        &ll; Back
      </v-btn>
    </p>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapGetters } from 'vuex';
import PageTitle from './PageTitle';

export default Vue.extend({
  name: "MovieDetail",

  components: {
    PageTitle,
  },

  props: {
    id: {
      type: String,
      default() {
        return '';
      },
    },
  },

  computed: {
    ...mapGetters({
      movie: 'movies/movie',
    }),
  },

  created() {
    this.$store.commit('movies/setMovie', { Title: 'Loading...' });
    this.$store.dispatch('movies/getMovie', this.id);
  },
});
</script>

<style lang="scss">
.movie-detail {
  .v-list-item__subtitle {
    white-space: unset;
  }
}
</style>
