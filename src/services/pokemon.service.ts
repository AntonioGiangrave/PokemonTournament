import { Request, Response } from 'express';
import { WELCOME_MESSAGE } from '../constants/api.constants';
import { MongooseDocument } from 'mongoose';
import { Team } from '../model/team.model';

const asyncRedis = require('async-redis');
const client = asyncRedis.createClient();

client.on('error', function(error: Error) {
  console.error(error);
});

export class PokemonService {
  welcomeMessage = async (req: Request, res: Response) => {
    await client.flushall();
    return res.status(200).send(WELCOME_MESSAGE);
  };

  /**
   *
   * get all teams from db
   *
   * @param req
   * @param res
   */
  getTeams = async (req: Request, res: Response) => {
    const cache = await client.get('teams');

    if (cache) {
      return res.send(cache);
    }

    Team.find({}, async (error: Error, teams: MongooseDocument) => {
      if (error) {
        res.send(error);
      }

      await client.set('teams', JSON.stringify(teams));

      return res.json(teams);
    });
  };

  /**
   *
   * get one team from db by Id
   *
   * @param req
   * @param res
   */
  getTeamById = async (req: Request, res: Response) => {
    const teamId = req.params.id;

    const cache = await client.get(teamId);

    if (cache) {
      return res.send(cache).end();
    }

    await client.del(teamId);

    Team.findById(teamId, async (error: Error, team: MongooseDocument) => {
      if (error) {
        return res.send(error);
      }

      await client.set(teamId, JSON.stringify(team));

      return res.json(team);
    });
  };

  /**
   *
   * add new team
   *
   * @param req
   * @param res
   */
  addNewTeam = async (req: Request, res: Response) => {
    await client.del('teams');

    const newTeam = new Team(req.body);

    newTeam.save(async (error: Error, team: MongooseDocument) => {
      if (error) {
        return res.send(error);
      }

      return res.json(team);
    });
  };

  /**
   *
   * delete team by id
   *
   * @param req
   * @param res
   */
  deleteTeam = async (req: Request, res: Response) => {
    const teamId = req.params.id;

    await client.del('teams');

    await client.del(teamId);

    Team.findByIdAndDelete(teamId, (error: Error, deleted: any) => {
      if (error) {
        return res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Team not found :(';
      return res.send(message);
    });
  };

  /**
   *
   * update a team by id
   *
   * @param req
   * @param res
   */
  updateTeam = async (req: Request, res: Response) => {
    await client.del('teams');

    const teamId = req.params.id;

    Team.findByIdAndUpdate(teamId, req.body, (error: Error, team: any) => {
      if (error) {
        res.send(error);
      }
      const message = team ? 'Updated successfully' : 'Team not found :(';
      return res.send(message);
    });
  };
}
