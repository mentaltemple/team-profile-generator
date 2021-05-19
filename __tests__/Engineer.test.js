const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Init", () => {
    it("should create a new Engineer object with a name, id, email, and github", () => {
      const engineer = new Engineer(
        "Joshua",
        82,
        "menteltemple@yahoo.com",
        "mentaltemple"
      );
      expect(engineer.name).toEqual("Joshua");
      expect(engineer.id).toEqual(82);
      expect(engineer.email).toEqual("menteltemple@yahoo.com");
      expect(engineer.github).toEqual("mentaltemple");
    });
  });
});
