const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNum() {
    return this.officeNum;
  }

  //overridden to 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
