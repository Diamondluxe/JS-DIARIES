//Assignment 1 : Variables and Data Types

// --- Question 1 ---
let name = "Dua Sheikh"; 
let age = 18; 
let city = "Karachi";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// --- Question 2 ---
let num1 = 20;
let num2 = 15;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// --- Question 3 ---
let studentName = "Dua Sheikh";
let course = "Software Engineering";
let fee = 5000;

console.log(`Student: ${studentName} `);
console.log(`Course: ${course}`)
console.log(`Fee: ${fee}`);


// Assginment 2 : Operator
// --- Question 1 ---
let a = 25;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// --- Question 2 ---
let checkNum = 14;
if (checkNum % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// --- Question 3 ---
let marks = 80;
let passingMarks = 50;

console.log("Greater than:", marks > passingMarks);
console.log("Less than:", marks < passingMarks);
console.log("Equal: ", marks === passingMarks);

//Assignment 3 : Conditional Statements (if..else)


// --- Question 1 ---
let personAge = 19;

if (personAge < 13) {
    console.log("Child");
} else if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// --- Question 2 ---
let number = -5;

if (number > 0) {
    console.log("Positive.");
} else if (number < 0) {
    console.log("Negative.");
} else {
    console.log("Zero.");
}

// --- Question 3 ---
let studentMarks = 85;

if (studentMarks >= 90) {
    console.log("Grade: A");
} else if (studentMarks >= 80) {
    console.log("Grade: B");
} else if (studentMarks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Result: Fail");
}


//Assignment 4 : Loops

// --- Question 1 ---
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// --- Question 2 ---
let tableNum = 7;
for (let i = 1; i <= 10; i++) {
    console.log(tableNum," * ",i," = ",tableNum*i);
}

// --- Question 3 ---
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//Assignment 5 : Functions

// --- Question 1 ---
function Welcome() {
    console.log("Welcome to JavaScript");
}
Welcome(); 

// --- Question 2 ---
function Sum(x, y) {
    return x + y;
}
let result = Sum(10, 25);
console.log(result);

// --- Question 3 ---
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("The number 37 is:", checkEvenOdd(37));
console.log("The number 42 is:", checkEvenOdd(42));

