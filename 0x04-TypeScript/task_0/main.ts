interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studenta: Student = {
  firstName: "Aina",
  lastName: "Michael",
  age: 19,
  location: "Nigeria",
};

const studentb: Student = {
  firstName: "Ronin",
  lastName: "Hector",
  age: 27,
  location: "Ghana",
};

const studentsList = [studenta, studentb];

let row = `|\tName\t|\tLocation\t|`;
console.log(row);

for (const student of studentsList) {
  row = `|\t${student[firstName]}\t|\t${student[lastName]}\t|`;
  console.log(row);
}
