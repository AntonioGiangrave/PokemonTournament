<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-content>
      <TeamList />
    </v-content>
  </v-app>
</template>

<script>
import TeamList from "./components/TeamList";

export default {
  name: "App",

  components: {
    TeamList
  },

  data: () => ({
    //
  })
};
</script>
