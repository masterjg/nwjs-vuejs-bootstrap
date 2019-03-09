<template>
<v-app>
  <AppSide />
  <v-content>
    <v-container
      fluid
      fill-height
      pa-0
    >
      <AppMain />
    </v-container>
  </v-content>
  <AppFooter />
</v-app>
</template>

<script>
import nw from 'nw';
import Menu from 'util/menu';
import { mapState, mapActions, mapGetters } from 'vuex';
import AppStore from './app.store';
import AppFooter from './components/footer/footer.component';
import AppSide from './components/side/side.component';
import AppMain from './components/main/main.component';

export default {
  components: {
    AppFooter,
    AppSide,
    AppMain,
  },
  computed: {
    ...mapState('App', {
      // @todo finish up
    }),
    ...mapGetters('App', {
      // @todo finish up
    }),
  },
  created() {
    Menu.setUp({
      File: {
        Exit: {
          key: 'esc',
          click: () => {
            nw.App.quit();
          },
        },
      },
    });
    this.$store.registerModule('App', AppStore);
  },
  methods: {
    ...mapActions('App', [

    ]),
  },
};
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
<style src="material-icons-base64/index.css"></style>

<style>
html {
  overflow: hidden;
}
</style>
