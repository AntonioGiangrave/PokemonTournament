<template>
  <v-layout class="pokemon ma-2" >
    <v-card>
      <v-img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        contain
        class="grey darken-4"
        transition="fade-transition"
      ></v-img>
      <div class="d-flex align-center flex-column name py-2">{{pokemon.name}}</div>
    </v-card>
  </v-layout>
</template>

<style lang="sass">
.pokemon
  width : 100px
  flex: none !important

.name
  font-size: 12px 
</style>
<script>
export default {
  name: "Pokemon",

  props: ["pokemon"],

};
</script>
