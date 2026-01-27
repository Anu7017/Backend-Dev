const fs = require("fs");

// Output file jisme answers store honge
const outputFile = "fs_answers.txt";

// Pehle file ko create
fs.writeFileSync(outputFile, "", "utf8");

// Helper function to append content
function add(content) {
  fs.appendFile(outputFile, content + "\n\n", (err) => {
    if (err) console.error("Append Error:", err);
  });
}


add(`1. Difference between synchronous and asynchronous file operations:
- Synchronous operations block the execution until the task is completed.
- Asynchronous operations do not block execution and use callbacks/promises.

Example:
fs.readFileSync() → synchronous
fs.readFile() → asynchronous
`);


add(`2. When should you use file streams?
- When working with very large files
- When you want efficient memory usage
- When processing data chunk by chunk (like logs, videos)
`);


add(`3. Purpose of 'utf8' encoding:
- It tells Node.js how to decode file data
- Converts buffer data into readable text
- Without utf8, data is returned as a Buffer
`);


add(`4. Common file system error codes:
- ENOENT: File or directory does not exist
- EACCES: Permission denied
- EISDIR: Path is a directory, not a file
- ENOTDIR: Path is not a directory
- EEXIST: File already exists
`);


add(`5. Safely delete a directory with all contents:
- Use fs.rm() with recursive and force options

Example:
fs.rm("folderName", { recursive: true, force: true }, callback);
`);


add(`6. Piping in streams:
- Piping connects readable stream to writable stream
- Used to transfer data automatically

Example:
fs.createReadStream("input.txt").pipe(fs.createWriteStream("output.txt"));
`);


add(`7. Importance of error handling in file operations:
- Prevents application crash
- Helps debug issues
- Handles missing files and permission errors safely
`);


add(`8. Difference between writeFile and appendFile:
- writeFile: Overwrites existing file content
- appendFile: Adds content to the end of the file
`);

console.log(" All answers written successfully to fs_answers.txt");
