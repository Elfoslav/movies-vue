<template>
  <h1 class="display-2 font-weight-bold mt-2 mb-6">{{ text }}</h1>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PageTitle",

  props: {
    text: {
      type: String,
      default() {
        return '';
      },
    },
  },
});
</script>
