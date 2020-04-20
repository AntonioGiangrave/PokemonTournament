<template>
  <v-container>
    <h1>TeamList</h1>
    <Team v-for="n in 8" :key="n"/>
  </v-container>
</template>

<script>
import Team from "./Team";

export default {
  name: "TeamList",

  // data: () => {},
  components: {
    Team
  }
};
</script>
