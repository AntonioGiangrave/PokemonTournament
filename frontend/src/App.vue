<template>
  <v-app id="app" dark>
    <v-toolbar>
      <v-toolbar-title>snce - pokemon tournament</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.icon" :to="item.link" text>
          <router-link :to="item.link" class="nav-link"
            >{{ item.title }}
          </router-link></v-btn
        >
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>
<style lang="sass">
.v-toolbar
  flex: none !important
</style>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      menu: [
        { icon: "home", title: "Team List", link: "/" },
        { icon: "info", title: "Create", link: "/create" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>
