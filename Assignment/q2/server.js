const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('server.log')
});

let totalLines = 0;
let errorCount = 0;
let warningCount = 0;
let infoCount = 0;

rl.on('line', (line) => {
  totalLines++;

  if (line.includes('ERROR')) errorCount++;
  else if (line.includes('WARNING')) warningCount++;
  else if (line.includes('INFO')) infoCount++;
});

rl.on('close', () => {
  const report = `
Log File Summary
----------------
Total Lines : ${totalLines}
ERROR       : ${errorCount}
WARNING     : ${warningCount}
INFO        : ${infoCount}
`;

  fs.writeFileSync('summary.txt', report.trim());
  console.log('Log analysis completed');
});
