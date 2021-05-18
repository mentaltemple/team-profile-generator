const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const questions = require("./lib/questions");

function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    function addMember() {
      if (data.teamMember === "Engineer") {
        console.log("engineer");
        // inquirer.prompt(Engineer);
      } else if (data.teamMember === "Intern") {
        console.log("intern");
        // inquirer.prompt(Intern);
      } else
        console.log(
          "\nThank you, your team profile has been successfully generated!"
        );
      process.exit(0);
    }

    addMember(data);
    // writeToFile("index.html", generateTeam(data));
  }).catch;
}

init();
//
