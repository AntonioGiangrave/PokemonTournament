<template>
  <v-card class="mx-auto ma-2" max-width="1000" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">team Pokemon</div>
        <v-list-item-title class="headline mb-1">Team Name</v-list-item-title>
        <v-list-item-subtitle
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >

        <Pokemon v-for="n in 8" :key="n" />
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Pokemon from "./Pokemon";

export default {
  name: "Team",

  // data: () => {},
  components: {
    Pokemon
  }
};
</script>
