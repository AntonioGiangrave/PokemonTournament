import mongoose from 'mongoose';
import { any } from 'bluebird';

const Schema = mongoose.Schema;

export const pokemonSchema = new Schema({
  name: String,
  base_experience: Number,
  image: String,
  abilities: [String],
  types: [String],
});

const PokemonSchema = new mongoose.Schema(pokemonSchema);

export const Pokemon = mongoose.model('Pokemon', PokemonSchema);
