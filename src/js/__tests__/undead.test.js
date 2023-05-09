import Undead from "../undead";

test("instance of the class Undead", () => {
  const undead = new Undead("Alex");
  expect(undead).toEqual({
    health: 100, 
    level: 1, 
    attack: 25, 
    defence: 25, 
    type: "Undead", 
    name: "Alex",
  });
});