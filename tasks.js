// Task 1
function checkVotingEligibility(age) {
  if (age >= 18)
    console.log("You are eligible for voting,")
  else
    console.log("You are not eligible for voting.")
}

// Task 2
function printNumbersWithWhile() {
  var i =0
  while (i<5) {
    console.log(i)
    i++
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (let i = 0; i < 10; i++) {
    if (i%2 == 0) {
      console.log(i)
    }    
  }
}

// Task 4
function getDayOfWeek(number) {
  var day;
  switch (number) {
      case 1:
          day = "Sunday";
          break;
      case 2:
          day = "Monday";
          break;
      case 3:
          day = "Tuesday";
          break;
      case 4:
          day = "Wednesday";
          break;
      case 5:
          day = "Thursday";
          break;
      case 6:
          day = "Friday";
          break;
      case 7:
          day = "Saturday";
          break;
      default:
          day = "Try again";
          break;
  }
  return day;
}

// Task 5
function sum(x,y) {
  console.log(x + y)
}

// Task 6
//Uncomment and solve
const fruits = ["banana", "apple", "strawberry", "kiwi", "dragon fruit"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])  
}

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
const utils = require('./tasks');

console.log(utils.getDayOfWeek(2))
