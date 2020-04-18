import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const pokemonSchema = new Schema({
  name: String,
  base_experience: Number,
  images: [String],
  abilities: [String],
  types: [String],
});

const PokemonSchema = new mongoose.Schema(pokemonSchema);

export const Pokemon = mongoose.model('Pokemon', PokemonSchema);
