<template>
  <v-container class="d-flex  flex-column justify-start justify-space-between">
    <h2>{{ count }} pokemons available</h2>

    <v-row>
      <Pokemon
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </v-row>

    <v-divider></v-divider>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Team Name"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>

      <v-btn color="warning" @click="resetValidation">
        Reset Validation
      </v-btn>

      <v-btn color="success" @click="getPokemon">
        Gotta Catch 'Em All
      </v-btn>

      <v-btn color="success" @click="postPokemon">
        Save teams
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import Pokemon from "./Pokemon";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
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
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getPokemon() {
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
        name: this.name,
        pokemons: this.pokemons
      };
      this.$store.dispatch("postTeam", team);
    }
  },

  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => (this.count = response.data.count));
  }
};
</script>
