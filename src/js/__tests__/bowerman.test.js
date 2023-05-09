import Bowerman from "../bowerman";

test("instance of the class Bowerman", () => {
  const bowerman = new Bowerman("Alex");
  expect(bowerman).toEqual({
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25, 
    type: "Bowerman", 
    name: "Alex",
  });
});


