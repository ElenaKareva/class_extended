import Zombie from "../zombie";

test("instance of the class Zombie", () => {
  const zombie = new Zombie("Alex");
  expect(zombie).toEqual({
    health: 100, 
    level: 1, 
    attack: 40, 
    defence: 10, 
    type: "Zombie", 
    name: "Alex",
  });
});