const readline = require('readline');

const rln = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rln.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rln.close();
});

rln.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
