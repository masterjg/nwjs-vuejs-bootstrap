<template>
<v-footer
  app
  color="blue darken-1"
  class="pa-1"
>
  <v-spacer />
  <a href="mailto:masterj2@gmail.com">Marius Guščius</a>&nbsp;© 2019 - {{ currentYear }}
</v-footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
  footer a {
    color: inherit;
  }
</style>
