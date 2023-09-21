import fs from 'fs';

function readDatabase (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const fields = {};
        for (const line of lines) {
          const details = line.split(',');
          // eslint-disable-next-line no-continue
          if (line === '' || details[3] === 'field') continue;
          const [firstname, field] = [details[0], details[3]];
          if (!fields[field]) fields[field] = [firstname];
          else fields[field].push(firstname);
        }
        resolve(fields);
      }
    });
  });
}

export default readDatabase;
