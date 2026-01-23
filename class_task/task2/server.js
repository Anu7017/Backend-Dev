const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('server.log')
});

let lines = 0;
let error = 0;
let warning = 0;
let info = 0;

rl.on('line', (line) => {
  lines++;

  if (line.includes('ERROR')) error++;
  if (line.includes('WARNING')) warning++;
  if (line.includes('INFO')) info++;
});

rl.on('close', () => {
  fs.writeFileSync(
    'summary.txt',
    `Total Lines: ${lines}
ERROR: ${error}
WARNING: ${warning}
INFO: ${info}`
  );

  console.log('Done');
});
