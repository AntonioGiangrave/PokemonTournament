//src/app.ts
import express from 'express';
import { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Controller } from './main.controller';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

class App {
  public app: Application;

  public pokemonController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();
    this.pokemonController = new Controller(this.app);
    this.setMongoConfig();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    const mongoUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`;
    // const mongoUrl = `mongodb://mongodb:27017/Pokemon`;
    mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
export default new App().app;
