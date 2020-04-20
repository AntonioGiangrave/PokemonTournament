import { expect } from 'chai';

import app from '../src/app';
import { agent as request } from 'supertest';
// import mongoose = require("./mock");
import mongoose from 'mongoose';
import { Pokemon } from '../src/model/pokemon.model';

describe('Endpoints', () => {
  it('main route', async function() {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('SNCE');
  });

  it('POST valid data return saved document  ', async function() {
    const mock = {
      name: 'TeamTony',
      pokemons: [
        {
          name: 'bulbasaur-test',
          base_experience: 80,
          images: ["img1', 'img2"],
          abilities: ['abilitiy1', 'ability2'],
          types: ['type1', 'type2'],
        },
        {
          name: 'ditto-test',
          base_experience: 100,
          images: ["img3', 'img2"],
          abilities: ['abilitiy1', 'ability3'],
          types: ['type1', 'type2'],
        },
      ],
    };

    const res = await request(app)
      .post('/team/create')
      .send(mock);

    expect(res.status).to.equal(200);
    expect(res.body._id).not.to.be.null;
    expect(res.body).to.be.an('object');

    await Pokemon.findByIdAndDelete(res.body._id);
  });
});
