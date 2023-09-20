const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    let noOfStudents = 0;
    const fd = {};
    for (const line of lines) {
      const details = line.split(',');

      // eslint-disable-next-line no-continue
      if (line === '' || details[3] === 'field') continue;
      const [firstname, field] = [details[0], details[3]];
      if (!fd[field]) fd[field] = [firstname];
      else fd[field].push(firstname);
      noOfStudents += 1;
    }
    console.log(`Number of students: ${noOfStudents}`);
    for (const field of Object.keys(fd)) {
      const noOfStudents = fd[field].length;
      const listOfStudents = fd[field].join(', ');
      console.log(
        `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}`
      );
    }
  } catch (_err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
