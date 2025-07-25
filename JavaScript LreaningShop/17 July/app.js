// 6 types of arrow functions

// ================== 1 - No parameters ==================================

// --If the function takes no parameters , you use empty parentheses
const greet = () => "Hello";
console.log(greet());

// ================== 2 - Single Parameters ==================================

// --if there's only one parametes, parentheses are optional
const square = (x) => x * x;
console.log(square(x));

// ================== 3 - multiple parameters ==================================

//  --if there's only one parameter, parentheses are optional
const add = (a, b) => a + b;
console.log(add(2, 3));

// ============= 4 - Function body with multiple statements =====================

// --if the funation body has more than one statement, you need to use curly braces and specify the return keyword (if you want to return something)
const greetPerson = (name) => {
  const greeting = "Hello , " + name + "!";
  return greetPerson;
};
console.log(greetPerson("Koushik"));

// ============= 5 - returning object literals =====================

// --when directly returning and object literal, wrap the literal in parentheses to differentiate it from the function block
const makePerson = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(makePerson("John", "Doe"));

// ============= 6 - higher order function and callbacks =====================

// --arrow function are particularly popular when used as short callbacks
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
