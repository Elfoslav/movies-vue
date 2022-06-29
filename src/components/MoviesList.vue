<template>
  <v-container>
    <page-title text="Welcome to Vuetify" />

    <p class="subheading font-weight-regular">
      For help and collaboration with other Vuetify developers,
      <br />please join our online
      <a href="https://community.vuetifyjs.com" target="_blank"
        >Discord Community</a
      >
    </p>

    <v-form @submit.prevent="onSearch">
      <v-text-field
        v-model="searchString"
        label="Search movies..."
        append-icon="mdi-magnify"
        @input="onSearchDebounce"
      />
    </v-form>

    <v-alert
      v-if="movies.length"
      dense
      type="info"
      color="primary"
    >
      Click on the movie name to see its detail.
    </v-alert>

    <v-card v-if="movies.length">
      <v-list flat>
        <v-list-item-group
          color="primary"
        >
          <template v-for="(movie, i) in movies">
            <v-divider
              v-if="i !== 0"
              :key="i"
              inset
            />

            <v-list-item
              :key="movie.imdbID"
              :to="`/movie/${movie.imdbID}`"
            >
              <v-list-item-avatar v-if="movie.Poster !== 'N/A'">
                <v-img :src="movie.Poster"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="`${movie.Title} (${movie.Year})`"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <p v-else>
      <span v-if="error">
        {{ error }}
      </span>
      <span v-else>
        Please start typing movie name in the search bar above.
      </span>
    </p>
  </v-container>
</template>

<script>
import Vue from "vue";
import { mapGetters } from 'vuex';
import { debounce } from 'lodash';
import PageTitle from './PageTitle';

export default Vue.extend({
  name: "MoviesList",

  components: {
    PageTitle,
  },

  data: () => ({
    searchString: '',
  }),

  computed: {
    ...mapGetters({
      movies: 'movies/movies',
      error: 'movies/serverError',
    }),
  },

  methods: {
    onSearch() {
      this.$store.dispatch('movies/searchMovies', this.searchString);
    },
    onSearchDebounce: debounce(function() {
      this.onSearch();
    }, 400),
  },
});
</script>
