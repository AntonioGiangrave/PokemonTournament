import Fs from 'fs';
import Path from 'path';
import Axios from 'axios';

export const fetchImage = async (url: string, filename: string) => {
  const path = Path.resolve('./images/', filename);

  if (Fs.existsSync(path)) {
    return;
  }

  const writer = Fs.createWriteStream(path);

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};
