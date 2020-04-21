<template>
  <v-card class="mx-auto ma-2" max-width="1000" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="d-flex align-end flex-column">Pokemons team</div>
        <v-list-item-title class="headline mb-1">{{
          team.name
        }}</v-list-item-title>
        <v-row no-gutters class="mt-2">
          <v-col>Total base experience: {{ total_base_experience }} </v-col>
          <v-col>Types involved: {{ types }} </v-col>
        </v-row>
        <v-row>
          <Pokemon v-for="pokemon in team.pokemons" :key="pokemon.id" />
        </v-row>
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

  props: ["team"],

  components: {
    Pokemon
  },

  computed: {
    total_base_experience() {
      return this.team.pokemons.reduce((acc, curr) => {
        return acc + curr.base_experience;
      }, 0);
    },
    types() {
      return this.team.pokemons
        .map(p => p.types)
        .flat()
        .join(", ");
    }
  }
};
</script>
