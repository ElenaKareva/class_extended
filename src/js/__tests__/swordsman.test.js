import Swordsman from "../swordsman";

test("instance of the class Swordsman", () => {
  const swordsman = new Swordsman("Alex");
  expect(swordsman).toEqual({
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10, 
    type: "Swordsman", 
    name: "Alex",
  });
});
