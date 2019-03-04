<template>
<v-layout row>
  <v-flex xs12>
    <v-card>
      <v-toolbar
        color="white"
        flat
      >
        <v-toolbar-title class="grey--text text--darken-4">
          Computer info
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <c-p-u-info />
      <v-footer class="mt-5" />
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import CPUInfo from './components/cpu-info/cpu-info.component.vue';

export default {
  components: {
    CPUInfo,
  },
};
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
<style src="material-icons-base64/index.css"></style>

<style>
html
{
  overflow: auto;
}
</style>
