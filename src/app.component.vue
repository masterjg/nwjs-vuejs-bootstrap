<template>
<v-layout row>
  <v-flex xs12>
    <v-card>
      <v-toolbar-title class="grey--text text--darken-4">
        Computer info
      </v-toolbar-title>
      <c-p-u-info />
      <memory-info />
      <storage-info />
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import CPUInfo from './components/cpu-info/cpu-info.component';
import MemoryInfo from './components/memory-info/memory-info.component';
import StorageInfo from './components/storage-info/storage-info.component';

export default {
  components: {
    CPUInfo,
    MemoryInfo,
    StorageInfo,
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
