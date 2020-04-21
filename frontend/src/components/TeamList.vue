<template>
  <v-container>
    <h1>TeamList</h1>
      <Team v-for="team in teams" :key="team.id" :team="team" />
  </v-container>
</template>

<script>
import Team from "./Team";

export default {
  name: "TeamList",

  mounted() {
    this.$store.dispatch("getTeams");
  },
  computed: {
    teams() {
      return this.$store.getters.getTeams;
    }
  },
  components: {
    Team
  }
};
</script>
