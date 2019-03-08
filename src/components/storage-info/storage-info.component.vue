<template>
<div>
  <v-subheader>Storage Info</v-subheader>
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
        class="ma-3"
      >
        Drives:
        <v-divider />
        <v-btn
          v-for="(data, index) in storageData"
          :key="index"
          color="red"
          dark
          depressed
        >
          <v-icon
            large
            dark
          >
            storage
          </v-icon>
          &nbsp;[{{ data.type }}] {{ data.name }} ({{ data.size }} GB)
        </v-btn>
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
    storageInfo: {
      async get() {
        return new Promise((resolve) => {
          chrome.system.storage.getInfo(resolve);
        });
      },
      watch: [
        'reloads',
      ],
      default: 0,
    },
  },
  computed: {
    storageData() {
      if (!this.storageInfo) {
        return 0;
      }
      return this.storageInfo.map(storage => ({
        name: storage.name.replace(/[^0-9a-zA-Z_ ]/g, ''),
        type: storage.type,
        size: (storage.capacity * 1e-9).toFixed(2),
      }));
    },
  },
  async mounted() {
    setInterval(async () => {
      this.reloads++;
    }, 250);
  },
};
</script>
