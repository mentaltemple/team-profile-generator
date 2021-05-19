const fs = require("fs");
const path = require("path");

function writeToFile(data) {
  //creates an output directory
  const OUTPUT_DIR = path.resolve(__dirname, "../output/");
  //creates an output path, joins the output directory with the filename
  const outputPath = path.join(OUTPUT_DIR, "index.html");
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  return fs.writeFileSync(outputPath, data, "utf-8");

  // return fs.writeFile(fileName, data, (err) =>
  //   err ? console.error(err) : console.log("Success!")
  // );
}

function renderHTML(data) {
  const teamArray = data;
  console.log(teamArray);

  let cardString = "";

  function generateManagerCard(member) {
    return `<div class="card shadow">
    <div class="card-header bg-info text-white">
      <h1>${member.name}</h1>
      <h2>${member.getRole()}</h2>
    </div>
    <div class="card-body bg-light">
      <div class="list-group list-group-flush border">
        <li class="list-group-item">ID: ${member.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${
          member.email
        }" target="_blank" rel="noreferrer noopener"> ${member.email}</a></li>
        <li class="list-group-item">Office #: ${member.officeNum}</li>
      </div>
    </div>
  </div>`;
  }
  function generateEngineerCard(member) {
    return `<div class="card shadow">
    <div class="card-header bg-info text-white">
      <h1>${member.name}</h1>
      <h2>${member.getRole()}</h2>
    </div>
    <div class="card-body bg-light">
      <div class="list-group list-group-flush border">
        <li class="list-group-item">ID: ${member.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${
          member.email
        }" target="_blank" rel="noreferrer noopener"> ${member.email}</a></li>
        <li class="list-group-item">GitHub:
           <a href="https://github.com/${
             member.github
           }" target="_blank" rel="noreferrer noopener"> ${member.github}</a>
        </li>
      </div>
    </div>
  </div>`;
  }
  function generateInternCard(member) {
    return `<div class="card shadow">
    <div class="card-header bg-info text-white">
      <h1>${member.name}</h1>
      <h2>${member.getRole()}</h2>
    </div>
    <div class="card-body bg-light">
      <div class="list-group list-group-flush border">
        <li class="list-group-item">ID: ${member.id}</li>
        <li class="list-group-item">
          Email: <a
            href="mailto: ${member.email}"
            target="_blank"
            rel="noreferrer noopener"
          >${member.email}</a>
        </li>
        <li class="list-group-item">School: ${member.school}</li>
      </div>
    </div>
  </div>`;
  }
  //build a card for each member of my teamArray
  teamArray.forEach((member) => {
    switch (member.getRole()) {
      case "Manager":
        cardString += generateManagerCard(member);
        break;

      case "Engineer":
        cardString += generateEngineerCard(member);
        break;

      case "Intern":
        cardString += generateInternCard(member);
    }
  });

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
    ${cardString}
    </main>
  </body>
</html>

  `;
}

module.exports.writeToFile = writeToFile;
module.exports.renderHTML = renderHTML;
