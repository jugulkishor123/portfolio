// syntax of for loop
/*for (initialization; condition; increment/decrement) {
    // code to be executed
  } */

  //code 
 
 /* const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} */

// program to display text 5 times
/*for (let i = 0; i < 5; i++) {
  console.log("Hello, world!");
}

// Output
Hello, world!
Hello, world!
Hello, world!
Hello, world!
Hello, world! */

// infinite loop never try  it may crash your browser and the system
// infinite for loop
/* for (;;) {
  console.log("This loop will run indefinitely!");
} */

// for in loop syntax
/*for (let variable in object) {
  // code to be executed for each value in iterable
}*/

/* let person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Output
// name: Alice
// age: 25
// city: New York */


// for of loop
/* for (let variable of iterable) {
  // code to be executed for each value in iterable
} */

/* const array = [1, 2, 3, 4, 5];

for (let number of array) {
  console.log(number);
}

// Output
1
2
3
4
5   */

// while loop syntax
/*while (condition) {
  // code to be executed while the condition is true
} */

/* let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Output
1
2
3
4
5  */

/* // array of numbers
const numbers = [5, -2, 10, 0, -3, 8, -1];

// variable to store the sum
let sum = 0;

// index variable for the while loop
let i = 0;

// Using a while loop, iterate through the array and add any positive numbers to the sum
while (i < numbers.length) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
  i++;
}

// print the sum of positive numbers
console.log(`The sum of positive numbers is ${sum}`);

// Output
23  */


// do while loop syntax
/*  do {
  // loop body
} while (condition);  */

/*  let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// Output
1
2
3
4
5 */

// break with loop
/*  The break statement in JavaScript is employed to prematurely terminate a loop prior to the loop condition being fulfilled. It can be used with for, while, and do-while loops.

  for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output
1
2
3
4  */

// break with while loop
/*  let i = 1;
while (i <= 10) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}

// Output
1
2
3
4   */


// continue statement
/* The continue statement in JavaScript is employed within loops to bypass the current iteration and proceed to the subsequent iteration of the loop
// Example of using continue statement

for (var i = 1; i <= 5; i++) {
  // Skip iteration if i is odd
  if (i % 2 !== 0) {
    continue; // continue statement used here
  }

  console.log("Iteration: " + i);
}

console.log("Exited the loop.");

// Output
Iteration: 2
Iteration: 4
Exited the loop. */

// problems 
 /*In the mystical land of numbers, there lived a talented JavaScript wizard named Alaric. He possessed a unique power to distinguish between odd and even numbers effortlessly. One day, the people of the land came to him with a puzzling request. They wanted a function that could compute the sum of odd and even numbers separately from a given array of integers.
Determined to help, Alaric began crafting a function called oddOrEvenSum. The function would take an array of integers as input and return an object containing the sum of all odd numbers and the sum of all even numbers found in the array.
With a heart full of curiosity and magic at his fingertips, Alaric delved into the task, creating a solution that showcased his mastery over decision statements. Little did he know that this function would prove invaluable to the people of the mystical land, helping them unravel the secrets hidden within their numbers.
Can you assist Alaric in completing his enchanting oddOrEvenSum function to bring balance to the numbers of the land?
Can you rise to the challenge of the String Splitter and impress your teacher with your coding skills? The challenge awaits, and it's up to you to take it on.
Example 1:
Input: [1, 2, 3, 4, 5]
Output: { oddSum: 9, evenSum: 6 }
Example 2:
Input: [10, 20, 30, 40, 50]
Output: { oddSum: 0, evenSum: 150 }
Example 3:
Input: [7, 13, 42, 31, 55]
Output: { oddSum: 106, evenSum: 42 } */


/*  function oddOrEvenSum(arr) {
  let oddSum = 0;
  let evenSum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  return { oddSum, evenSum };
}  */


// Que grade distribution
/*Input:
[85, 92, 78, 65, 95]
Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }
Example 2
Input:
[76, 81, 60, 55, 88}

Output:
{ A: 0, B: 2, C: 1, D: 1, F: 1 }
Example 3
Input:
[92, 95, 87, 60, 72]

Output:
{ A: 2, B: 1, C: 1, D: 1, F: 0 }  */

/*
function distributeGrades(scores) {
  const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  for (let score of scores) {
    if (score >= 90) {
      gradeCount.A++;
    } else if (score >= 80) {
      gradeCount.B++;
    } else if (score >= 70) {
      gradeCount.C++;
    } else if (score >= 60) {
      gradeCount.D++;
    } else {
      gradeCount.F++;
    }
  }

  return gradeCount;
} */


//Que3  simple calculator
/*
// Test cases
console.log(simpleCalculator(5, 2, '+')); // 7
console.log(simpleCalculator(5, 2, '-')); // 3
console.log(simpleCalculator(5, 2, '*')); // 10
console.log(simpleCalculator(5, 2, '/')); // 2.5
console.log(simpleCalculator(5, 0, '/')); // "Cannot divide by zero."
console.log(simpleCalculator('5', 2, '+')); // "Invalid input. Please enter numeric values."
console.log(simpleCalculator(5, 2, '&')); // "Unsupported operator. Please enter a valid operator (+, -, *, /)."  */

/*
function simpleCalculator(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
     return "Invalid input. Please enter numeric values.";
   }
   
   switch(operator) {
     case '+':
       return num1 + num2;
     case '-':
       return num1 - num2;
     case '*':
       return num1 * num2;
     case '/':
       if (num2 === 0) {
         return "Cannot divide by zero.";
       } else {
         return num1 / num2;
       }
 break;
     default:
       return "Unsupported operator. Please enter a valid operator (+, -, *, /).";
   }
 }      */