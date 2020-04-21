<template>
  <v-layout class="pokemon ma-2" >
    <v-card>
      <v-img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        contain
        class="grey darken-4"
        transition="fade-transition"
      ></v-img>
      <v-card-title class="name align-self-center">-name-</v-card-title>
    </v-card>
  </v-layout>
</template>

<style lang="sass">
.pokemon
  max-width : 100px

.name
  font-size: 15px 
</style>
<script>
export default {
  name: "Pokemon"

  // data: () => {}
};
</script>
