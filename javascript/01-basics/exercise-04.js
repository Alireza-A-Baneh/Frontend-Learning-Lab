
/**
 * Exercise 04: Course Revenue Functions
 * Topic: Functions, Parameters, and Return Values
 *
 * Objective:
 * Practice function declarations, parameters,
 * return values, loops, and conditional statements.
 *
 * Requirements:
 * 1. Create a function named calculate_revenue.
 *    - Accept an array of courses.
 *    - Calculate revenue from published courses only.
 *    - Return the total revenue.
 *
 * 2. Create a function named count_published.
 *    - Accept an array of courses.
 *    - Count published courses.
 *    - Return the count.
 *
 * 3. Call both functions and display their results.
 *
 * Constraints:
 * - Use function declarations.
 * - Use for...of and if statements.
 * - Do not use map, filter, or reduce.
 * - Do not use console.log inside the functions.
 *
 * Expected Output:
 * Published Courses: 3
 * Total Revenue: 33400000
 */

const courses = [
  { title: "Python", price: 800000, students: 20, published: true },
  { title: "Linux", price: 600000, students: 15, published: true },
  { title: "React", price: 900000, students: 10, published: false },
  { title: "Docker", price: 700000, students: 12, published: true }
];

// Solution:

function calculate_revenue(courses){
    let total = 0;
    for (const course of courses){
        if (course.published){
            total += course.price * course.students;
        }
    }

    return total;
}

function count_published(courses){
    let count = 0;
    for (const course of courses){
        if (course.published){
            count += 1;
        }
    }

    return count;
}

const count = count_published(courses);
const income = calculate_revenue(courses);

console.log(`Published Courses: ${count}`)
console.log(`Total Revenue: ${income}`)