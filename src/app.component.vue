<template>
<v-layout row>
  <v-flex xs12>
    <v-card>
      <v-toolbar-title class="grey--text text--darken-4">
        Computer info
      </v-toolbar-title>
      <v-spacer />
      <c-p-u-info />
      <v-spacer />
      <memory-info />
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import CPUInfo from './components/cpu-info/cpu-info.component.vue';
import MemoryInfo from './components/memory-info/memory-info.component.vue';

export default {
  components: {
    CPUInfo,
    MemoryInfo,
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
