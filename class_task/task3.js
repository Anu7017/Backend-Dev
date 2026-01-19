const http = require("http");
const fs = require("fs");
const url = require("url");

let students = [
  { id: 1, name: "Ankit", branch: "CSE" },
  { id: 2, name: "Rahul", branch: "IT" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  const log = `${new Date().toLocaleString()} | ${method} | ${path}\n`;
  fs.appendFile("log.txt", log, () => {});

  // GET /students
  if (method === "GET" && path === "/students") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(students));
  }

  // GET /students/:id
  if (method === "GET" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);
    const student = students.find((s) => s.id === id);

    if (!student) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Student not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(student));
  }

  // POST /students
  if (method === "POST" && path === "/students") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newStudent = JSON.parse(body);
      newStudent.id = students.length + 1;
      students.push(newStudent);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newStudent));
    });
    return;
  }

  // DELETE /students/:id
  if (method === "DELETE" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Student not found" }));
    }

    const deleted = students.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deleted[0]));
  }

  // 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Student API running on port 3000");
});