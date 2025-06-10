function birdFly(bird) {
  if (!bird.canFly) {
    throw new Error(`${bird.name} can't fly!`);
  }
  console.log(`${bird.name} is flying.`);
}

const sparrow = { name: "Sparrow", canFly: true };
const penguin = { name: "Penguin", canFly: false };

birdFly(sparrow);
birdFly(penguin);

// code that expects a bird breaks if the bird can't fly / doesn't support for flying.
/// we are chicking conditions manually , ==> design smell.
