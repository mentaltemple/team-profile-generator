const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Init", () => {
    it("should create a new Intern object with a name, id, email, and school", () => {
      const intern = new Intern(
        "Joshua",
        82,
        "mentaltemple@yahoo.com",
        "University of Denver"
      );
      expect(intern.name).toEqual("Joshua");
      expect(intern.id).toEqual(82);
      expect(intern.email).toEqual("mentaltemple@yahoo.com");
      expect(intern.school).toEqual("University of Denver");
    });
  });
});
