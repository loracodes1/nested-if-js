const age = 17;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

canWork; //the inner if statements will only execute if the outer ones are truthy

console.log(canWork)
console.log(canDrink)
console.log(canEnlist)
console.log(isAdult)


const order = 'mango';

let ingredients;
if (order === 'cheeseburger') {
    ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
} else if (order === 'hamburger') {
    ingredients = 'bun, burger, lettuce, tomato, onion';
} else if (order === 'malted') {
    ingredients = 'milk, ice cream, malted milk powder';
} else {
    console.log("Sorry, that's not on the menu right now.");
}

console.log(order)