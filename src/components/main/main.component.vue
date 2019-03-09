<template>
<v-layout>
  <v-flex
    id="content"
    fill-height
    pa-2
  >
    <v-toolbar-title class="grey--text text--darken-4">
      Computer info
    </v-toolbar-title>
    <CPUInfo />
    <MemoryInfo />
    <StorageInfo />
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

<style scoped>
#content {
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
