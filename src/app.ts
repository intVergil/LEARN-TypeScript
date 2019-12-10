// const userName = "vergil";
//userName = 'hello'; error

// let age = 20;
// age = 30;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

//console.log(result); error

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld); error

// const add = (a: number, b: number = 1) => a + b;

// const printOutport: (a: number | string) => void = output =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", event => console.log(event));
// }

// printOutport(add(10, 2));

const hobbies = ["Sports", "Cooking"];
const activesHobbies = ["Hiking"];

activesHobbies.push(...hobbies);

const person = {
  firstName: "max",
  age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(10, 2, 4, 5, 7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
