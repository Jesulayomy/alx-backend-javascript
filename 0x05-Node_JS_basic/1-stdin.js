process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const uinput = process.stdin.read();

  if (uinput) {
    process.stdout.write(`Your name is: ${uinput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
