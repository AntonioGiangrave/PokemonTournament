import { Application } from 'express';
import { PokemonService } from './services/pokemon.service';
import { imageMiddleware } from './middleware/images.middleware';

export class Controller {
  private pokemonService: PokemonService;

  constructor(private app: Application) {
    this.pokemonService = new PokemonService();
    this.routes();
  }

  public routes() {
    this.app.get('/', this.pokemonService.welcomeMessage);

    this.app.get('/team/list', this.pokemonService.getTeams);

    this.app.post('/team/create', imageMiddleware, this.pokemonService.addNewTeam);

    this.app.get('/team/:id', this.pokemonService.getTeamById);

    this.app.put('/team/:id/edit', imageMiddleware, this.pokemonService.updateTeam);
  }
}
