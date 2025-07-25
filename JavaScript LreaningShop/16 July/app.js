// ====== Variables ===========================================

let variablesName = value;
const constantName = value;

// ======= Data Types ==========================================

// Primitive Types
let numberVariable = 10;
let stringVariable = "Hello World";
let booleanVariable = true;
let nullVariable = null;
let undefinedVariable = undefined;

// ======== Complex Types =========================================

let arrayVariable = [1, 2, 3, 4, 5];
let objectVariable = { key: "value", numberKey: 10 };

// ========= Error Handling ========================================

try {
  // code that may thorw an error
} catch (error) {
  // handle the error
} finally {
  // code that executes regardiess of error
}

// ======== Arithmetic Operators =========================================

let addition = 5 + 3;
let subtration = 10 - 4;
let multiplication = 2 * 6;
let division = 20 / 4;
let modulus = 15 % 4;

// ======== Assignment Operators =========================================

let x = 10;
x += 5; // x = x + 5

// ========= Comparison Operators ========================================

let isEqual = 10 === 10;
let isNotEqual = 5 !== "5";

// ========== Outputting Data =======================================

// Output to console
console.log("Hello, World!");

// Output to HTML document
document.write("Hello, World!");

// Output to HTML document
alert("Hello, World!");

// ========== Control Structures =======================================

// Conditional Sataements
if (condition) {
  // code block
} else if (anotherCondition) {
  // code block
} else {
  // code block
}

// Loops
for (let i = 0; i < 5; i++) {
  // code block
}

while (condition) {
  // code block
}

// ========== Function =======================================

// function declaration
function functionName(parameter1, parameter2) {
  // function body
  return result;
}

// function expression
const functionName = function (parameter1, parameter2) {
  // function body
  return result;
};

// Arrow function
const functionName = (parameter1, parameter2) => {
  // function body
  return result;
};

// define a global funcation
function globalFuncation() {
  // function body
}

// Call the globalFuncation
globalFuncation();
