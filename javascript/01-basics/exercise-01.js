
/**
 * Exercise 01: Course Information
 * Topic: Variables and Template Literals
 *
 * Objective:
 * Practice variable declarations, arithmetic operations,
 * and formatted output in JavaScript.
 *
 * Requirements:
 * 1. Define a course named "JavaScript".
 * 2. Set the original price to 800,000.
 * 3. Initialize the student count to 20.
 * 4. Increase the student count by 5.
 * 5. Apply a 20% discount to the price.
 * 6. Display all results using template literals.
 *
 * Expected Output:
 * Course: JavaScript
 * Price: 800000
 * Students: 25
 * Final Price: 640000
 */

let course = "JavaScript";
let price = 800000;

let students = 20;
students += 5;

const discount = 0.2;
let final_price = price * (1 - discount)

console.log(`Course: ${course}`)
console.log(`Price: ${price}`)
console.log(`Students: ${students}`)
console.log(`Final Price: ${final_price}`)