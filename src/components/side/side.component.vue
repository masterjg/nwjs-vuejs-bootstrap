<template>
<v-navigation-drawer app>
  <v-list>
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <img
          src="icon.png"
          class="rotate"
        >
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>NW.js + Vue.js bootstrap</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
</script>

<style scoped>
@keyframes rotation {
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  transform-origin: center center;
  animation: rotation 2s linear infinite;
}
</style>
