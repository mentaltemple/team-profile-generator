const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  //overridden to 'Manager'
  getRole() {
    return "Manager";
  }
}
