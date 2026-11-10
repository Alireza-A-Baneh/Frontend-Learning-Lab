
/**
 * Exercise 05: Course Processing with Callbacks
 * Topic: Arrow Functions and Callback Functions
 *
 * Objective:
 * Practice arrow functions and passing functions
 * as arguments to other functions.
 *
 * Requirements:
 * 1. Create a function named processCourses.
 *    - Accept a courses array and a callback function.
 *    - Use for...of to iterate over the courses.
 *    - Call the callback for published courses only.
 *    - Pass each published course to the callback.
 *
 * 2. Create an arrow function named printRevenue.
 *    - Accept a course object.
 *    - Calculate revenue as price * students.
 *    - Print the course title and revenue.
 *
 * 3. Pass printRevenue to processCourses.
 *
 * Constraints:
 * - Use a function declaration for processCourses.
 * - Use an arrow function for printRevenue.
 * - Do not use map, filter, or reduce.
 *
 * Expected Output:
 * Python: 16000000
 * Linux: 9000000
 * Docker: 8400000
 */

const courses = [
  { title: "Python", price: 800000, students: 20, published: true },
  { title: "Linux", price: 600000, students: 15, published: true },
  { title: "React", price: 900000, students: 10, published: false },
  { title: "Docker", price: 700000, students: 12, published: true }
];

// Write your solution below.

 function processCourses(courses,func) {
    for(const course of courses){
        if (course.published){
            func(course);
        }
    }
}

const printRevenue = (course) => {
    const total = course.price * course.students;
    console.log(`${course.title}: ${total}`);
}

processCourses(courses, printRevenue);