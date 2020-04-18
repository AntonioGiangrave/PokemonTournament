import { Application } from 'express';
import { PokemonService } from './services/pokemon.service';

export class Controller {
  private pokemonService: PokemonService;

  constructor(private app: Application) {
    this.pokemonService = new PokemonService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.pokemonService.welcomeMessage);

    this.app.route('/pokemons').get(this.pokemonService.getAllPokemon);

    this.app.route('/pokemon').post(this.pokemonService.addNewPokemon);

    this.app
      .route('/pokemon/:id')
      .get(this.pokemonService.getOnePokemon)
      .delete(this.pokemonService.deletePokemon)
      .put(this.pokemonService.updatePokemon);

    this.app.route('/team/create').post(this.pokemonService.addNewTeam);
  }
}
