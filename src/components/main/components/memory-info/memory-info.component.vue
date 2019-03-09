<template>
<div>
  <v-subheader>Memory Info</v-subheader>
  <v-container
    fluid
    grid-list-xs
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        class="ma-2"
      >
        Usage:
        <v-divider />
        <v-progress-circular
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
    };
  },
  asyncComputed: {
    memoryInfo: {
      async get() {
        return new Promise((resolve) => {
          chrome.system.memory.getInfo(resolve);
        });
      },
      watch: [
        'reloads',
      ],
      default: 0,
    },
  },
  computed: {
    usage() {
      if (!this.memoryInfo) {
        return 0;
      }
      const usedCapacity = this.memoryInfo.capacity - this.memoryInfo.availableCapacity;
      return Math.floor(usedCapacity * 100 / this.memoryInfo.capacity);
    },
  },
  async mounted() {
    setInterval(async () => {
      this.reloads++;
    }, 250);
  },
};
</script>
