const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, reg) => {
  if (err) {
    throw err;
  }
  registrationContent = reg;
});

let args = require("minimist")(process.argv.slice(2));

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;

      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args["port"]);
// .listen(args["port"]);
// const server = http.createServer((req, res) => {
//   // const stream = fs.createReadStream("test.txt");
//   // stream.pipe();
//   fs.readFile("test.txt", (err, data) => {
//     res.end(data);
//   });
// });
// server.listen(3000);

// const readline = require("readline");

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });

// let args = minimist(process.argv.slice(2), {});

// console.log(args);
