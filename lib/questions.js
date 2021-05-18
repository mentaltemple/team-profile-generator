const managerQuestions = [
  {
    type: "input",
    message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the team manager's id?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the team manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the team manager's office number?",
    name: "officeNum",
  },
];
const addMemberChoice = [
  {
    type: "list",
    message: "Would you like to add another team member?",
    choice: ["Engineer", "Intern", "No, thank you"],
    name: "teamMember",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "Please enter the Engineer's Github username:",
    name: "github",
  },
];
module.exports.managerQuestions = managerQuestions;
module.exports.addMemberChoice = addMemberChoice;
module.exports.engineerQuestions = engineerQuestions;
