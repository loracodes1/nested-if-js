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
