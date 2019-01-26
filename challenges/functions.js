// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters. -- x
  * The first two parameters can accept any argument -- x
  * The last parameter accepts a callback  -- x
  * In the body of the function return the callback with the two parameters that you created -- x
*/

function consume(arg1, arg2, cb) {
  return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers -- x
  * Create a function named multiply that returns the product of two numbers  -- x
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!" -- x
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4 
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// console.log(consume(2,2,add))
// console.log(consume(10,16,multiply))
// console.log(consume("Mary","Poppins", greeting))

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// tl;dr `nestedfunction()` can access the variable `internal` because the variable is part of `nestedfunction()`'s closure (outer function free variable)

// Here is what is going on step by step. 
// 1. First, external is declared and pointed at 'I'm outside the function'. 
// 2. myFunction is pointed at the function expression
// 3. myFunction is invoked
// 4. console.log(external) is invoked - when invoked it looks for external in its local scope and can't find it so it reaches out to the global environment and sees external and we get 'I'm outside the function' printed to the console
// 5. internal is declared and pointed at 'Hello! I'm inside myFunction'
// 6. nestedFunction is pointed at the internal function expression 
// 7. nestedFunction is invoked - when invoked, it is looking for internal and doesn't see it in its local scope, but it is able to reach into its closure (reach to the outer function) and sees internal. nestedFunction then prints 'Hello! I'm inside myFunction' to the console

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();