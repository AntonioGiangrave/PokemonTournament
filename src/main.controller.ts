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

    this.app.route('/team/list').get(this.pokemonService.getTeams)

    this.app.route('/team/create').post(this.pokemonService.addNewTeam);

    this.app.route('/team/:id').get(this.pokemonService.getTeamById)

    this.app.route('/team/:id/edit').put(this.pokemonService.updateTeam)

  }

}
