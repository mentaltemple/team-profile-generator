const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("init", () => {
    it("should create an new Employee object with a name, an id, and an email", () => {
      const employee = new Employee("Joshua", 82, "mentaltemple@yahoo.com");
      expect(employee.name).toEqual("Joshua");
      expect(employee.id).toEqual(82);
      expect(employee.email).toEqual("mentaltemple@yahoo.com");
    });
  });
});
