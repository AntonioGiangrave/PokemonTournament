<template>
  <v-container class="d-flex flex-column justify-start justify-space-between">
    <h2>{{ count }} pokemons available</h2>

    <v-divider class="my-5"></v-divider>

    <v-form ref="form" max-width="1000" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="50" :rules="nameRules" label="Team Name" required></v-text-field>

      <v-btn color="success" class="mr-4" @click="getRandomPokemon">Gotta Catch 'Em All</v-btn>

      <v-btn color="success" @click="postPokemon">Save teams</v-btn>
    </v-form>
    <v-divider></v-divider>

    <v-row class="mt-8">
      <Pokemon v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import http from "../http-common";
import Pokemon from "./Pokemon";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 50) || "Name must be less than 50 characters"
    ],
    count: 0,
    pokemons: []
  }),

  components: {
    Pokemon
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    getRandomPokemon() {
      let rnd = Math.floor(Math.random() * this.count);
      console.log("getPokemon -> rnd", rnd);

      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + rnd)
        .then(response => {
          let pokemon = {
            name: response.data.name,
            base_experience: response.data.base_experience,
            image: response.data.sprites.front_default,
            abilities: response.data.abilities.map(a => a.name),
            types: response.data.types.map(a => a.type.name)
          };

          this.pokemons.push(pokemon);
        })
        .catch(function(err) {
          console.log("this Pokemons plays in hiding", err);
        });
    },
    postPokemon() {
      let team = {
        _id: this.$route.params.id,
        name: this.name,
        pokemons: this.pokemons,
        created_at: new Date()
      };

      console.log(team);
      this.$route.params.id
        ? this.$store.dispatch("updateTeam", team)
        : this.$store.dispatch("postTeam", team);
    },
    getTeam() {
      const uri = `/team/${this.$route.params.id}`;
      http
        .get(uri)
        .then(response => {
          this.name = response.data.name;
          this.pokemons = response.data.pokemons;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    this.$route.params.id ? this.getTeam() : (this.pokemons = []);

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => (this.count = response.data.count));
  },
  
};
</script>
