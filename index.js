const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const engineerQuestions = require("./lib/engineerQuestions");

//write to new HTML file with user data
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

const teamMembers = [];
//check if user added engineer or intern. If done, exit and create HTML.

//initial function
function init() {
  console.log("Build your team");
  inquirer.prompt(questions.questions).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum);
    teamMembers.push(manager);

    function buildTeam() {
      //if user chooses engineer, build an engineer object
      if (data.teamMember === "Engineer") {
        inquirer.prompt(engineerQuestions).then((data) => {
          const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
          );
          teamMembers.push(engineer);
        });

        console.log("engineer");
        //if user chooses intern, build an intern object
      } else if (data.teamMember === "Intern") {
        console.log("intern");
      } else
        console.log(
          "\nThank you, your team profile has been successfully generated!"
        );
      console.log(manager);
      process.exit(0);
    }

    buildTeam(data);
    // writeToFile("index.html", generateTeam(data));
  }).catch;
}

init();
