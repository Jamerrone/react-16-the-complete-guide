// Spread Operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(numbers);
console.log(newNumbers);

const person = { name: "James" };
const newPerson = { ...person, age: 25 };

console.log(person);
console.log(newPerson);

// Rest Operator
const filter = (...args) => args.filter(arg => arg === 1);

console.log(filter(1, 2, 3));
