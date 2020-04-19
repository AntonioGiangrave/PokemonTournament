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
   * get all teams from db
   *
   * @param req
   * @param res
   */
  public getTeams(req: Request, res: Response) {
    Team.find({}, (error: Error, teams: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(teams);
    });
  }

  /**
   *
   * get one team from db by Id
   *
   * @param req
   * @param res
   */
  public getTeamById(req: Request, res: Response) {
    const teamId = req.params.id;
    Team.findById(teamId, (error: Error, team: MongooseDocument) => {
      if (error) {
        res.send(error);
      }
      res.json(team);
    });
  }

  /**
   *
   * add new team
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
   * delete team by id
   *
   * @param req
   * @param res
   */
  public deleteTeam(req: Request, res: Response) {
    const teamId = req.params.id;

    Team.findByIdAndDelete(teamId, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Team not found :(';
      res.send(message);
    });
  }

  /**
   *
   * update a team by id
   *
   * @param req
   * @param res
   */
  public updateTeam(req: Request, res: Response) {
    const teamId = req.params.id;
    Team.findByIdAndUpdate(teamId, req.body, (error: Error, team: any) => {
      if (error) {
        res.send(error);
      }
      const message = team ? 'Updated successfully' : 'Team not found :(';
      res.send(message);
    });
  }
}
