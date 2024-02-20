// Decission statement
// if statement syntax

/* if (expression) {
    // code to execute if expression is true 
  }

  // code
  const num = 10;
if (num > 0) {
  console.log("The number is positive");
}

//if else statement syntax
if (condition) {
    // this code will execute if condition is true 
  } else {
    // code to execute if condition is false 
  }

  // code
  const num = 10;
if (num > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}


//if else if statement syntax
if (condition1) {
    // code to execute if condition1 is true
  } else if (condition2) {
    // code to execute if condition2 is true
  } else {
    // code to execute if both condition1 and condition2 are false
  }

  //codes
  const num = 10;
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

//que about weather
let temperature = 25; // You can change this value to test different conditions

if (temperature < 0) {
    console.log("It's freezing outside.");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("The weather is cool.");
} else if (temperature >= 21 && temperature <= 30) {
    console.log("The weather is warm.");
} else {
    console.log("It's hot outside.");
}

// nested if else staement syntax
if (condition1) {
    // code to execute if condition1 is true 
  
    if (condition2) {
      // code to execute if both condition1 and condition2 are true 
    } else {
      // code to execute if condition1 is true but condition2 is false 
    }
  
  } else {
    // code to execute if condition1 is false 
  }

  //codes
  // Checks if Number is Positive or not. Also checks it the number is even or odd.
const num = 10;
if (num > 0) {
  console.log("The number is positive");
  if (num % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
} else {
  console.log("The number is not positive");
}

//if-else statement without using curly braces {}
const num = 10;

if (num > 0)
  console.log("The number is positive");
else
  console.log("The number is not positive");

  //The basic syntax of a switch statement
  switch(expression) {
    case value1:
          // Executes this code block if the expression matches value1
      break;
    case value2:
          // Executes this code block if the expression matches value1
      break;
    case value3:
          // Executes this code block if the expression matches value1
      break;
    default:
          // Executes this code block if none of the previous cases match
  }

  // codes
  let dayOfWeek = 5;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName); // Output: "Friday"*/

// swith statements
/*let nameOfMonth = 6;
let numOfMonth;
switch (nameOfMonth) {
    case 1:
        numOfMonth= "jan"
        
        break;

        case 2:
            numOfMonth= "jfeb"
            
            break;
            case 3:
        numOfMonth= "march"
        
        break;
        case4:
        numOfMonth= "japril"
        
        break;
        case 5:
        numOfMonth= "may"
        
        break;
}console.log(numOfMonth);*/

/*let fruit = 'orange';
let color;

switch (fruit) {
  case 'banana':
  case 'lemon':
    color = 'yellow';
    break;
  case 'apple':
  case 'cherry':
  case 'strawberry':
    color = 'red';
    break;
  case 'grape':
  case 'blueberry':
    color = 'purple';
    break;
    case 'orange':
        case 'apple':
            color = 'vio'
  default:
    color = 'unknown';
    break;
}

console.log(color); // Output: "unknown" */

// switch case string
// program using switch statement
/*let value = 123;

switch (typeof value) {
  case 'string':
    console.log('The value is a string');
    break;
  case 'number':
    console.log('The value is a number');
    break;
  case 'boolean':
    console.log('The value is a boolean');
    break;
  default:
    console.log('The value is not a string, number, or boolean');
    break;
}

// Output
"The value is a string"  */

//Use the parseFloat() function to convert the user input from a string to a number

// program for a simple calculator
/*-let num1 = parseFloat(prompt('Enter the first number:'));
let num2 = parseFloat(prompt('Enter the second number:'));
let operator = prompt('Enter the operator (+, -, *, /):');
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log('Invalid operator');
}

console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);

// Output
/*Enter the first number: 4
Enter the second number: 5
Enter operator: +
The result of 4 + 5 is 9  */

/*let dayOfWeek = 'Tuesday';

switch (dayOfWeek) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('It is a weekday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('It is a weekend');
    break;
  default:
    console.log('Invalid day of the week');
} */


//     problem solving

/*Sarah is a web developer who wants to create a JavaScript function to check if a given string is a palindrome. She wants to use this function to build a feature that validates whether user input is a palindrome.
Help Sarah by writing a JavaScript function named isPalindrome that takes a string as input and returns true if the string is a palindrome and false otherwise.
Example 1:
Input: "racecar"
Output: true
Example 2:
Input: "hello"
Output: false*/
   
/* function main() {
  var str = readLine().split(" ").map(x => (x));
  console.log(isPalindrome(str));
}

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
} */


/*In a faraway land of mathematical wonders, a group of curious mathematicians found themselves pondering over the signs of products. They decided to embark on a coding journey to build a function that would determine the sign of the product of three given numbers.
The mathematicians laid down the rules for the function called productSign:
If the product is positive (greater than 0), the function should return 1. If the product is negative (less than 0), the function should return -1. If the product is zero, the function should return 0. The mathematicians were eager to see their function come to life and started coding in JavaScript. However, they faced some challenges in handling different scenarios.
Can you use your coding prowess to assist the mathematicians in creating the function productSign and unraveling the mysteries of the signs of products?
Example 1:
Input:
2, 3, 5

Output:
1
Example 2:
Input:
-4, 6, 0

Output:
0
Example 3:
Input:
-1, -2, -3

Output:
-1*/

/*function main() {
  var num1 = parseInt(readLine());
  var num2 = parseInt(readLine());
  var num3 = parseInt(readLine());
  console.log(productSign(num1, num2, num3));
}

function productSign(num1, num2, num3) {
  const product = num1 * num2 * num3;
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
}*/

/*In a land where mathematical wizards roamed, the people needed a function that could determine the signs of three given numbers and return the result as a string. They sought a JavaScript function to aid them in their quest.
Write a JavaScript function called checkSign that takes three numbers as input and returns a string representing the signs of the numbers.
If all three numbers are positive, return "+++" If two numbers are positive and one is negative, return "++-" If one number is positive and two are negative, return "+--" If all three numbers are negative, return "---"
Example 1:
Input:
1, 2, 3

Output:
"+++"
Example 2:
Input:
-1, 2, 3

Output:
"++-"
Example 3:
Input:
-1, -2, 3

Output:
"+--"
Example 4:
Input:
-1, -2, -3

Output:
"---" */
/*
function main() {
  var num1 = parseInt(readLine());
  var num2 = parseInt(readLine());
  var num3 = parseInt(readLine());
  console.log(checkSign(num1, num2, num3));
}

function checkSign(num1, num2, num3) {
  let positiveCount = 0;
  let negativeCount = 0;

  if (num1 > 0) positiveCount++;
  if (num2 > 0) positiveCount++;
  if (num3 > 0) positiveCount++;

  negativeCount = 3 - positiveCount;

  if (positiveCount === 3) return "+++";
  if (positiveCount === 2) return "++-";
  if (positiveCount === 1) return "+--";
  if (positiveCount === 0) return "---";
}*/