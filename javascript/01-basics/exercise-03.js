
/**
 * Exercise 03: Course Revenue Report
 * Topic: Loops and Conditional Statements
 *
 * Objective:
 * Practice for loops, for...of loops, and conditions
 * while processing course information.
 *
 * Given Data:
 * const courses = [
 *   { title: "Python", price: 800000, students: 20, published: true },
 *   { title: "Linux", price: 600000, students: 15, published: true },
 *   { title: "React", price: 900000, students: 10, published: false },
 *   { title: "Docker", price: 700000, students: 12, published: true }
 * ];
 *
 * Requirements:
 * 1. Use a for...of loop to process the courses.
 * 2. Calculate total revenue from published courses only.
 * 3. Count the number of published courses.
 * 4. Print the titles of published courses.
 * 5. Display the final results using template literals.
 *
 * Expected Output:
 * Python
 * Linux
 * Docker
 * Published Courses: 3
 * Total Revenue: 33400000
 */

// solution:


const courses = [
    { title: "Python", price: 800000, students: 20, published: true },
    { title: "Linux", price: 600000, students: 15, published: true },
    { title: "React", price: 900000, students: 10, published: false },
    { title: "Docker", price: 700000, students: 12, published: true }
];

let count = 0;
let revenue = 0;


for (const course of courses){
    if(course.published){
        console.log(course.title);
        count += 1;
        revenue += course.price * course.students;
    }
}
console.log(`Published Courses: ${count}`);
console.log(`Total Revenue: ${revenue}`);