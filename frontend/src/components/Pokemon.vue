<template>
  <v-layout class="pokemon ma-2">
    <v-card>
      <v-img
        contain
        :src="img"
        class="grey darken-4"
      ></v-img>
      <div class="d-flex align-center flex-column name py-2">
        {{ pokemon.name }}
      </div>
    </v-card>
  </v-layout>
</template>

<style>
.pokemon {
  width: 100px;
  flex: none !important;
}
.name {
  font-size: 12px;
}
</style>
<script>
export default {
  name: "Pokemon",

  props: ["pokemon"],

  computed: {
    img() {
      if (/(http(s?)):\/\//i.test(this.pokemon.image)) {
        return this.pokemon.image;
      }

      return `/images/${this.pokemon.image}`;
    }
  }
};
</script>
