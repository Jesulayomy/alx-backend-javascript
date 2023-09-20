import readDatabase from '../utils';

class StudentsController {
  static getAllStudents (req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let response = 'This is the list of our students\n';
        for (const field of Object.keys(fields).sort()) {
          const noOfStudents = fields[field].length;
          const listOfStudents = fields[field].join(', ');
          response += `Number of students in ${field}: ${noOfStudents}. List: ${listOfStudents}\n`;
        }
        response = response.slice(0, -1);
        res.status(200);
        res.send(response);
      })
      .catch((err) => {
        res.status(500);
        console.log(err);
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor (req, res) {
    if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((fields) => {
          const field = req.params.major;
          const listOfStudents = fields[field].join(', ');
          res.status(200);
          res.send(`List: ${listOfStudents}`);
        })
        .catch((err) => {
          res.status(500);
          res.send(err.message);
        });
    }
  }
}

export default StudentsController;
