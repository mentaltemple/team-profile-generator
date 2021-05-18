const fs = require("fs");

function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
