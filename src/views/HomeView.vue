<template>
  <movies-list />
</template>

<script>
  import MoviesList from '../components/MoviesList'

  export default {
    name: 'HomeView',

    components: {
      MoviesList,
    },
  }
</script>
