<template>
  <movie-detail :id="id" />
</template>

<script>
  import MovieDetail from '../components/MovieDetail'

  export default {
    name: 'MovieView',

    components: {
      MovieDetail,
    },

    computed: {
      id() {
        return this.$route.params.id;
      },
    },
  }
</script>
