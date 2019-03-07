import Vue from 'vue/dist/vue';
import AsyncComputed from 'vue-async-computed';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import nw from 'nw';
import App from './app.component.vue';

Vue.use(AsyncComputed);
Vue.use(Vuetify);
Vue.use(Vuex);

new Vue({
  el: '#app',
  components: {
    App,
  },
  mounted() {
    this.$nextTick(() => {
      nw.Window.get().show();
    });
  },
  template: '<v-app><App/></v-app>',
});

// async function setStorageDataInDOM () {
//   const storageInfo = await getStorageData();
//   document.getElementById('storage').innerHTML = `
//     <h2>Storage</h2>
//     ${storageInfo.map(storage => `[ ${storage.type} / ${storage.id} ] <strong>${storage.name}</strong> ${(storage.capacity * 1e-9).toFixed(2)} GB`).join('<br/>')}<br/>
//   `;
// }

// async function getStorageData () {
//   return new Promise((resolve) => {
//     chrome.system.storage.getInfo(resolve);
//   });
// }
