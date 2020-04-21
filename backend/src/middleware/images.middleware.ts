import { Response, Request } from 'express';
import { fetchImage } from '../lib/lib.images';

export const imageMiddleware = (req: Request, res: Response, next: any) => {
  let requestTeam = req.body;

  requestTeam.pokemons.map(async (p: any) => {
    const fileName = p.image.split('/').pop();

    await fetchImage(p.image, fileName);

    p.image = fileName;

    return p;
  });

  next();
};
