// ==> Syntax Shortcuts and Essentials

// 1. Ternary Operator
const isAdult = age >= 18 ? "Yes" : "No";

// 2. Default Parameters
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

// 3. Arrow Functions
const add = (a, b) => a + b;

// 4. Destructuring Objects
const { name, age } = person;

// 5. Destructuring Array
const [first, second] = colors;

// 6. Template Literals
const message = `Hi, ${user.name}`;

// 7. Spread Operator
const newArray = [...oldArray, 4];

// 8. Optional Chaining
const street = user?.address?.street;

// 9. Rest Parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// 10. Nullish Coalescing
const username = inputName ?? "Anonymous";

// ==> Logic , Loops and Array

// 11. Short-Circuit Ecaluation
const status = isLoggedIN && "Welcome!";

// 12. Logical OR Assignment (||=)
user.name ||= "Guest";

// 13. Logival AND Assignment (&&=)
settings.debug &&= false;

// 14. forEach Loop
items.forEach((item) => console.log(item));

// 15. Map Function
const squared = nums.map((n) => n * n);

// 16. For of Loop
for (const item of items) {
  console.log(item);
}

// 17. Filter Function
const evens = nums.filter((n) => n % 2 === 0);

// 18. Reduce Function
const total = nums.reduce((a, b) => a + b, 0);

// 19. Objects Property Shorthand
const Age = 25;
const Person = { Name, Age };

// 20. Computed Property Names
const key = "level";
const player = { [key]: 42 };

// ==> Object & Array Utilities
// 21. Includes Check
const found = list.includes("apple");

// 22. Set for UNique Values
const unique = [...new Set(array)];

// 23. Object.values
const vals = Object.values(obj);

// 24. Object.keys
const keys = Object.keys(obj);

// 25. Chaining Array Method
const result = data.filter((a) => a.active).map((a) => a.name);

// 26. Flatten Array
const flat = arr.flat();

// 27. Trim String
const cleaned = street.trim();

// 28. Pad string
const padded = "5".padStart(2, "0"); //"05"

// 29. Intl.Number Format
const price = new Intl.NumberFormat();
format(123456789); // "1,234,567"

// 30. Objects.entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

// ==> Modern Tricks & Utilities

// 31. Dynamic import
const module = await import("./module.js");

// 32. Promise.all
await Promise.all([fetchData(), loadUI()]);

// 33. Number Conversion with Unary +
const num = +"42";

// 34. Boolean Conversion with !!
const isTrue = !!value;

// 35. Short Array Swap
[a, b] = [b, a];
