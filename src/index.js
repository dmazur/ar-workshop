'use strict';

const readline = require('readline');
const main = require('./main');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.on('line', (line) => {
  main(line.trim());
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

rl.prompt();
