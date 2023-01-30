/*console.log(__dirname);
console.log(__filename);
setInterval(() => {
  console.log("Hi This is Mathu");
}, 1000);
*/
//Modules
//OS Module
/*const os = require("os");

//Info about current user
console.log(os.userInfo());

//Methods return in system uptime
console.log(os.uptime());

//OS Details and memory
const currentOs = {
  name: os.type(),
  release: os.release(),
  totlanMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
*/
//Path-Module
/*const path = require("path");

//Seperator
console.log(path.sep);

//Path Join

const filePath = path.join("/config/", "config.env");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "config", "config.env");
console.log(absolute);*/
//File Systems
/*
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log("Result", result);
  const first = result;
  console.log("First", first);
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("Second", second);

    writeFile(
      "./content/result-async.txt",
      `Here is Result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
*/
/*
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome Our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome Our about page");
  }
  //res.write("Welcome Our home page");
  res.end(`<h1>OOPS!</h1>`);
});

server.listen(4000, () => {
  console.log("Server is running on 4000");
});
*/

// npm - global command comes with node
//npm --version

// local dependency -- user it only in this particular project
// nom i <package name>

//package.json -- manifest file (stores importent info about project)
/*
const _ = require("lodash");

const item = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(item);
console.log(newItems);
*/
