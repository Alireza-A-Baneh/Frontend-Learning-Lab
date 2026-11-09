
/**
 * Exercise 02: Course Enrollment Status
 * Topic: Operators and Conditional Statements
 *
 * Objective:
 * Practice arithmetic, comparison, logical operators,
 * and conditional statements in JavaScript.
 *
 * Requirements:
 * 1. Create variables for course name, capacity,
 *    enrolled students, and publication status.
 * 2. Calculate the number of available seats.
 * 3. Determine the enrollment status:
 *    - "Coming Soon" if the course is unpublished.
 *    - "Full" if there are no available seats.
 *    - "Open" otherwise.
 * 4. Display the results using template literals.
 *
 * Expected Output:
 * Course: JavaScript
 * Available Seats: 5
 * Status: Open
 */

// solution:

const course_name = "JavaScript";
const capacity = 30;
const enrolled = 25;
const published = true;

const available_seats = capacity - enrolled;

console.log(`Course: ${course_name}`);
console.log(`Available Seats: ${available_seats}`);

if(!published){
    console.log(`Status: Coming Soon`);
}
else if (available_seats <= 0){
    console.log(`Status: Full`);
}
else{
    console.log(`Status: Open`);
}


