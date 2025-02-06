//1. Simple Callback Example

function greet(name, callback) {
  let message = "Hello, " + name;
  callback(message);
}


function showMessage(msg) {
  console.log(msg);
}


greet("Arpita Tayade", showMessage);


//2. Callback for Mathematical Operations


function calculate(a, b, operation) {
    return operation(a, b);
}


function add(x, y) {
    return x + y;
}


console.log(calculate(8, 8, add));


//3. Timer Callback Function


function delay(callback) {
    setTimeout(callback, 3000);
}


delay(function() {
    console.log("Executed after 2 seconds");
});


//4. Custom Repeater Function (Loop Simulation)


function repeat(n, action) {
    for (let i = 1; i <= n; i++) {
        action(i);
    }
}


repeat(5, function(num) {
    console.log("Arpita:", num);
});



//5. Custom Comparator Function


function compare(x, y, callback) {
    return callback(x, y);
}


function isGreater(a, b) {
    return a > b;
}


console.log(compare(20, 10, isGreater));  



//6. Custom String Manipulation


function processString(str, callback) {
    return callback(str);
}


function toUpperCase(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += String.fromCharCode(s.charCodeAt(i) - 32);
    }
    return result;
}


console.log(processString("hello", toUpperCase)); 



//7. Function that Returns Another Function


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}


let double = multiplier(2);
console.log(double(5)); 



//8. Custom Filter Using Callbacks


function filterNumbers(numbers, condition) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (condition(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}


function isEven(num) {
    return num % 2 === 0;
}


console.log(filterNumbers([1, 2, 3, 4, 5, 6], isEven)); 



//9. Custom Mapper Using Callbacks


function transform(numbers, operation) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}


function square(n) {
    return n * n;
}


console.log(transform([1, 2, 3], square)); 


//10. Function Execution Tracker


function execute(func) {
    console.log("Executing function...");
    func();
}


execute(function() {
    console.log("Hello from callback!");
});



//1. Power Function Using Callback


function power(base, exponent, callback) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = callback(result, base);
    }
    return result;
}


function multiply(a, b) {
    return a * b;
}


console.log(power(3, 3, multiply));




//2. Custom Counter with Callback


function counter(limit, callback) {
    for (let i = 1; i <= limit; i++) {
        callback(i);
    }
}


counter(5, function(num) {
    console.log("Counting:", num);
});



//3. Check Divisibility Using Callback


function checkDivisibility(number, callback) {
    return callback(number);
}


function isDivisibleBy5(n) {
    return n % 5 === 0;
}


console.log(checkDivisibility(10, isDivisibleBy5)); 


//4. Custom Delayed Execution


function executeAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}


executeAfterDelay(function() {
    console.log("Executed after delay");
}, 3000);



//5. Function that Returns Another Function


function greetPerson(greeting) {
    return function(name) {
        return greeting + ", " + name;
    };
}


let sayHello = greetPerson("Hello");
console.log(sayHello("Arpita Tayade")); 


//6. Custom Even Number Finder


function findEvenNumber(n, callback) {
    return callback(n);
}


function isEven(num) {
    return num % 2 === 0;
}


console.log(findEvenNumber(8, isEven)); 



//7. Create a Multiplier Function


function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}


let triple = makeMultiplier(3);
console.log(triple(4)); 



//8. Check if Number is Prime


function isPrime(n, callback) {
    return callback(n);
}


function checkPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


console.log(isPrime(7, checkPrime));



//9. Calculate Factorial Using Callback


function factorial(n, callback) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = callback(result, i);
    }
    return result;
}


function multiply(a, b) {
    return a * b;
}


console.log(factorial(5, multiply));



//10. Custom Function Logger


function logFunctionExecution(func) {
    console.log("Executing function...");
    func();
}


logFunctionExecution(function() {
    console.log("Function executed!");
});


//1. Execute Multiple Functions in Sequence


function executeInOrder(first, second) {
    first();
    second();
}


executeInOrder(
    function() { console.log("First function executed"); },
    function() { console.log("Second function executed"); }
);



//2. Convert Number to String Using Callback


function convertNumber(n, callback) {
    return callback(n);
}


function toString(num) {
    return num + "";
}


console.log(convertNumber(123, toString)); 



//3. Execute Function Based on Condition


function executeIfTrue(condition, func) {
    if (condition) func();
}


executeIfTrue(true, function() {
    console.log("Condition met, function executed");
});




//4. Reverse a String Using Callback


function reverseString(str, callback) {
    return callback(str);
}


function reverse(s) {
    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    return result;
}


console.log(reverseString("hello", reverse)); 




//5. Count Occurrences of a Character


function countChar(str, char, callback) {
    return callback(str, char);
}


function count(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) count++;
    }
    return count;
}


console.log(countChar("apple", "a", count)); 



//6. Custom Number Formatter


function formatNumber(number, callback) {
    return callback(number);
}


function addCommas(num) {
    let str = "" + num;
    let result = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (count && count % 3 === 0) result = "," + result;
        result = str[i] + result;
        count++;
    }
    return result;
}


console.log(formatNumber(1234567, addCommas)); 




//7. Custom String Padding


function padString(str, length, char, callback) {
    return callback(str, length, char);
}


function padLeft(s, len, c) {
    let result = s;
    while (result.length < len) {
        result = c + result;
    }
    return result;
}


console.log(padString("42", 5, "0", padLeft)); 


//1. Custom Odd Number Finder 

function checkOdd(number, callback) {
  return callback(number);
}

let num = 7;
let isOdd = checkOdd(num, (n) => n % 2 !== 0); 
console.log(num + " is odd: " + isOdd);

num = 10;
isOdd = checkOdd(num, (n) => n % 2 !== 0);
console.log(num + " is odd: " + isOdd); 


function isOddFunc(n){
    return n % 2 !== 0;
}

num = 15;
isOdd = checkOdd(num, isOddFunc);
console.log(num + " is odd: " + isOdd); 


//2.Function Execution Tracker  

function trackExecution(callback) {
  console.log("Executing...");
  return callback(); 
}

function myFunction() {
  console.log("Inside myFunction");
  return "Result from myFunction";
}

let result = trackExecution(myFunction);
console.log("Returned value:", result);

result = trackExecution(() => {
  console.log("Inside anonymous function");
  return 42;
});
console.log("Returned value:", result);


function add(a, b) {
  console.log("Adding", a, "and", b);
  return a + b;
}

result = trackExecution(() => add(5, 3)); 
console.log("Returned value:", result); 



//1. Custom Odd Number Finder
function customOddNumberFinder(num, callback) 
{
return callback(num);
}
function isOdd(num) 
{
return num % 2 !== 0;
}
const number = 7;
console.log(customOddNumberFinder(number, isOdd));

//2. Function Execution Traker
function isOdd(num) 
{
    return num % 2 !== 0;
}
function customOddNumberFinder(num, callback)
 {
    return callback(num);
}
function executionTracker(callback, ...args) 
{
    console.log("Executing...");
    return callback(...args);
}
function sampleFunction() 
{
    console.log("Function executed!");
}
executionTracker(sampleFunction);

//3. Square Root Calculator Using Callback
function squareRootCalculator(num, callback) 
{
    return callback(num);
}
function computeSquareRoot(num) 
{
    let x = num;
    let y = 1;
    let e = 0.000001;
    while (x - y > e) {
        x = (x + y) / 2;
        y = num / x;
    }
    return x;
}
const number = 25;
console.log(squareRootCalculator(number, computeSquareRoot));

//4. Execute Function N Times
function executeNTimes(fn, N) 
{
    for (let i = 1; i <= N; i++) 
{
        console.log(`Iteration: ${i}`);
        fn(i);
    }
}
executeNTimes((i) => console.log(`Function executed at iteration ${i}`), 5);

//5. Find Maximum of Two Numbers Using Callback
function findMax(a, b, callback) 
{
    return callback(a, b);
}
const maxCallback = (x, y) => (x > y ? x : y);
const result = findMax(10, 20, maxCallback);
console.log("Maximum number is:", result);

//6. Custom Character Replacer in a String
function customReplacer(str, charToReplace, callback) 
{
    let modifiedStr = '';
    
    for (let char of str) 
{
        if (char === charToReplace) 
{
            modifiedStr += '*';
        } else 
{
            modifiedStr += char;
        }
    }
    
    return callback(modifiedStr);
}
const result = customReplacer("hello world", "o", (modifiedStr) => modifiedStr);
console.log(result); 

//7. String Concatenation Using Callback
function concatenateStrings(str1, str2, callback)
 {
    return callback(str1, str2);
}

// Callback function to concatenate strings
function concatCallback(s1, s2)
 {
    return s1 + s2;
}
const result = concatenateStrings("Hello, ", "World!", concatCallback);
console.log(result); 

//8. Number Divider with Validation
function divideNumbers(a, b, callback) 
{
    if (typeof a !== 'number' || typeof b !== 'number') 
{
        return "Error: Inputs must be numbers";
    }
    return callback(a, b);
}

const safeDivide = (num1, num2) => {
    return num2 === 0 ? "Error" : num1 / num2;
};

console.log(divideNumbers(10, 2, safeDivide)); 
console.log(divideNumbers(10, 0, safeDivide)); 
console.log(divideNumbers("10", 2, safeDivide));

//9.  Convert Celsius to Fahrenheit Using Callback
function convertCelsiusToFahrenheit(celsius, callback) 
{
    return callback(celsius);
}

const toFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};

const celsiusTemp = 25;
const fahrenheitTemp = convertCelsiusToFahrenheit(celsiusTemp, toFahrenheit);
console.log(`${celsiusTemp}°C is equal to ${fahrenheitTemp}°F`);