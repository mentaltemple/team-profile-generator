const fs = require("fs");

function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function renderHTML(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../output/style.css" />
    <title>Team Member Generator</title>
  </head>
  <body>
    <header class="row justify-content-center align-items-center">
      <h1>My Team</h1>
    </header>
    <main class="row justify-content-center">
      <!-- Manager Card -->
      <div class="card shadow">
        <div class="card-header bg-info text-white">
          <h1>NAME</h1>
          <h2>ROLE</h2>
        </div>
        <div class="card-body bg-light">
          <div class="list-group list-group-flush border">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">Office #:</li>
          </div>
        </div>
      </div>
      <!-- Engineer Card -->
      <div class="card shadow">
        <div class="card-header bg-info text-white">
          <h1>NAME</h1>
          <h2>ROLE</h2>
        </div>
        <div class="card-body bg-light">
          <div class="list-group list-group-flush border">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">GitHub:</li>
          </div>
        </div>
      </div>
      <!-- Intern Card -->
      <div class="card shadow">
        <div class="card-header bg-info text-white">
          <h1>NAME</h1>
          <h2>ROLE</h2>
        </div>
        <div class="card-body bg-light">
          <div class="list-group list-group-flush border">
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email:</li>
            <li class="list-group-item">School:</li>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>

  
  
  
  `;
}

module.exports.writeToFile = writeToFile;
module.exports.renderHTML = renderHTML;