const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");

//write to new HTML file with user data
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

//creates an empty array
const teamMembers = [];

//build engineer function
function buildEngineer() {
  inquirer
    .prompt(questions.engineerQuestions)
    .then((data) => {
      console.log(data);
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      console.log(engineer);
      console.log(teamMembers);
    })
    .catch()
    .then(addMember);
}

//build intern function
function buildIntern() {
  inquirer.prompt(questions.internQuestions).then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamMembers.push(intern);
  });
}

//check if user added engineer or intern. If done, exit and create HTML.
function addMember() {
  inquirer.prompt(questions.addMemberChoice).then((data) => {
    //if user chooses engineer, build an engineer object
    if (data.teamMember === "Engineer") {
      buildEngineer();
      //if user chooses intern, build an intern object
    } else if (data.teamMember === "Intern") {
      buildIntern();
    } else
      console.log(
        "\nThank you, your team profile has been successfully generated!"
      );

    process.exit(0);
  });
}

//initial function
function init() {
  console.log("Build your team");
  inquirer.prompt(questions.managerQuestions).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNum);
    teamMembers.push(manager);

    //ask if the client would like to add another team member

    addMember(data);

    // writeToFile("index.html", generateTeam(data));
  }).catch;
}

init();
