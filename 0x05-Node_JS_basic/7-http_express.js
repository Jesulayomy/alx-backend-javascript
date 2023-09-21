/* eslint-disable no-unused-vars */
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let response = 'This is the list of our students\n';
  fs.readFile(process.argv[2], { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.end(`${response}Cannot load the database`);
    } else {
      const lines = data.split('\n');
      let noOfStudents = 0;
      const fields = {};
      for (const line of lines) {
        const details = line.split(',');
        // eslint-disable-next-line no-continue
        if (line === '' || details[3] === 'field') continue;
        const [firstname, field] = [details[0], details[3]];
        if (!fields[field]) fields[field] = [firstname];
        else fields[field].push(firstname);
        noOfStudents += 1;
      }
      response += `Number of students: ${noOfStudents}\n`;
      for (const field of Object.keys(fields)) {
        const noOfStudents = fields[field].length;
        const listOfStudents = fields[field].join(', ');
        response += `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}\n`;
      }
      response = response.slice(0, -1);
      res.end(response);
    }
  });
});

app.listen(1245);

module.exports = app;
