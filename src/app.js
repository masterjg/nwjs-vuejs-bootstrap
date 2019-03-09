import Vue from 'vue/dist/vue';
import AsyncComputed from 'vue-async-computed';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import nw from 'nw';
import App from './app.component';

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
