//src/app.ts
import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Controller } from './main.controller';
import mongoose from 'mongoose';
import { MONGO_URL } from './constants/api.constants';
import redis from 'redis';

class App {
  public app: Application;

  public pokemonController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.pokemonController = new Controller(this.app);
    this.setMongoConfig();
    // this.setRedis();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

}
export default new App().app;
