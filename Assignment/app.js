const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

// READ FILE
if (command === 'read') {
  fs.readFile(arg1, 'utf8', (err, data) => {
    if (err) return console.log('Error reading file');
    console.log(data);
  });
}

// WRITE FILE
else if (command === 'write') {
  fs.writeFile(arg1, arg2, (err) => {
    if (err) return console.log('Error writing file');
    console.log('File written successfully');
  });
}

// COPY FILE
else if (command === 'copy') {
  fs.copyFile(arg1, arg2, (err) => {
    if (err) return console.log('Error copying file');
    console.log('File copied');
  });
}

// DELETE FILE
else if (command === 'delete') {
  fs.unlink(arg1, (err) => {
    if (err) return console.log('Error deleting file');
    console.log('File deleted');
  });
}

// LIST DIRECTORY
else if (command === 'list') {
  fs.readdir(arg1, (err, files) => {
    if (err) return console.log('Error reading directory');
    files.forEach(file => console.log(file));
  });
}

// INVALID COMMAND
else {
  console.log('Invalid command');
}
