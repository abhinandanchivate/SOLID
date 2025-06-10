const moveBird = (moveStrategy, bird) => {
  moveStrategy(bird); // this function is a callback function
};
const walkStrategy = (bird) => {
  console.log(`${bird.name} is walking.`);
};
const flyStrategy = (bird) => {
  console.log(`${bird.name} is flying.`);
};
const sparrow = { name: "Sparrow" };
const penguin = { name: "Penguin" };
const ostrich = { name: "Ostrich" };
const eagle = { name: "Eagle" };

moveBird(flyStrategy, sparrow); // Sparrow is flying.
moveBird(walkStrategy, penguin); // Penguin is walking.
moveBird(walkStrategy, ostrich); // Ostrich is walking.
moveBird(flyStrategy, eagle); // Eagle is flying.
