import { Request, Response } from 'express';
import { WELCOME_MESSAGE } from '../constants/api.constants';
import { Pokemon } from '../model/pokemon.model';
import { MongooseDocument } from 'mongoose';
import { Team } from '../model/team.model';
export class PokemonService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }

  /**
   *
   * get all pokemon from db
   *
   * @param req
   * @param res
   */
  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  /**
   *
   * get one pokemon from db from Id
   *
   * @param req
   * @param res
   */
  public getOnePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findById(pokemonId, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  /**
   *
   * add new pokemon
   *
   * @param req
   * @param res
   */
  public addNewTeam(req: Request, res: Response) {
    const newTeam = new Team(req.body);
    newTeam.save((error: Error, team: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(team);
    });
  }

  /**
   *
   * add new pokemon
   *
   * @param req
   * @param res
   */
  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save((error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(pokemon);
    });
  }

  /**
   *
   * delete pokemon
   *
   * @param req
   * @param res
   */
  public deletePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;

    Pokemon.findByIdAndDelete(pokemonId, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Pokemon not found :(';
      res.send(message);
    });
  }

  /**
   *
   * update a pokemon
   *
   * @param req
   * @param res
   */
  public updatePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndUpdate(pokemonId, req.body, (error: Error, pokemon: any) => {
      if (error) {
        res.send(error);
      }
      const message = pokemon ? 'Updated successfully' : 'Pokemon not found :(';
      res.send(message);
    });
  }
}
