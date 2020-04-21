import mongoose from 'mongoose';
import { pokemonSchema } from './pokemon.model';

const TeamSchema = new mongoose.Schema({
  name: String,
  pokemons: { type: [pokemonSchema] },
  created_at: String
});

export const Team = mongoose.model('Team', TeamSchema);
