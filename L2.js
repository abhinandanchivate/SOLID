const moveBird = (moveStrategy, bird) => {
  moveStrategy(bird); // this function is a callback function
};
const walkStrategy = (bird) => {
  console.log(`${bird.name} is walking.`);
};
const flyStrategy = (bird) => {
  console.log(`${bird.name} is flying.`);
};
const sparrow = { name: "Sparrow", move: "fly" }; // move
const penguin = { name: "Penguin", move: "walk" };
const ostrich = { name: "Ostrich", move: "walk" };
const eagle = { name: "Eagle", move: "fly" };

const birds = [sparrow, penguin, ostrich, eagle];
birds.forEach((bird) => {
  if (bird.move === "fly") {
    moveBird(flyStrategy, bird);
  } else if (bird.move === "walk") {
    moveBird(walkStrategy, bird);
  }
});
