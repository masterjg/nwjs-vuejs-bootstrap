<template>
<div>
  <v-subheader>CPU Info</v-subheader>
  <v-container
    fluid
    grid-list-xs
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs2
        class="ma-2"
      >
        Model:
        <v-divider />
        {{ cpuInfo.modelName }}
      </v-flex>
      <v-flex
        xs2
        class="ma-2"
      >
        Architecture:
        <v-divider />
        {{ cpuInfo.archName }}
      </v-flex>
      <v-flex
        xs2
        class="ma-2"
      >
        Features:
        <v-spacer />
        {{ cpuInfo.features.join(', ') }}
      </v-flex>
      <v-flex
        xs2
        class="ma-2"
      >
        Processors:
        <v-divider />
        {{ cpuInfo.numOfProcessors }}
      </v-flex>
      <v-flex
        xs3
        class="ma-2"
      >
        Usage:
        <v-divider />
        <v-progress-circular
          v-for="(usage, index) in usages"
          :key="index"
          :rotate="270"
          :size="75"
          :width="15"
          :value="usage"
          color="teal"
        >
          {{ usage }}%
        </v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import chrome from 'chrome';

export default {
  data() {
    return {
      reloads: 0,
      usages: [
        10, 50, 20, 50,
      ],
    };
  },
  async mounted() {
    setInterval(async () => {
      this.reloads++;
    }, 1000);
  },
  asyncComputed: {
    cpuInfo: {
      async get() {
        return new Promise((resolve) => {
          chrome.system.cpu.getInfo(resolve);
        });
      },
      watch: [
        'reloads',
      ],
    },
  },
};
</script>
