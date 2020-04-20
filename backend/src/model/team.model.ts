import mongoose from 'mongoose';
import { pokemonSchema } from './pokemon.model';

const TeamSchema = new mongoose.Schema({
  name: String,
  pokemons: { type: [pokemonSchema] },
});

export const Team = mongoose.model('Team', TeamSchema);
