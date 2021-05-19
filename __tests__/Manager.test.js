const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Init", () => {
    it("should create a new Manager object with a name, id, email, and office number", () => {
      const manager = new Manager("Joshua", 82, "mentaltemple@yahoo.com", 21);
      expect(manager.name).toEqual("Joshua");
      expect(manager.id).toEqual(82);
      expect(manager.email).toEqual("mentaltemple@yahoo.com");
      expect(manager.officeNum).toEqual(21);
    });
  });
});
