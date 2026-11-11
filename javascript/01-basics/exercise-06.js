
/**
 * Exercise 06: Published Course Analysis
 * Topic: Array Methods - filter, map, and find
 *
 * Objective:
 * Practice filtering, transforming, and searching
 * arrays using callback functions.
 *
 * Requirements:
 * 1. Use filter to create an array of published courses.
 * 2. Use map to extract the titles of published courses.
 * 3. Use find to identify the first published course
 *    with fewer than 15 students.
 * 4. Print the published course titles.
 * 5. Print the title of the course found in step 3.
 * 6. Print the total number of published courses.
 *
 * Constraints:
 * - Use filter, map, and find.
 * - Use arrow functions as callbacks.
 * - Do not use for, while, or for...of.
 * - Do not modify the original courses array.
 *
 * Expected Output:
 * Published Courses: Python, Linux, Docker
 * First Low Enrollment Course: Docker
 * Published Course Count: 3
 */

const courses = [
  { title: "Python", price: 800000, students: 20, published: true },
  { title: "Linux", price: 600000, students: 15, published: true },
  { title: "React", price: 900000, students: 10, published: false },
  { title: "Docker", price: 700000, students: 12, published: true }
];

// Write your solution below.


const published_courses = courses.filter(c => c.published);

const published_titles = published_courses.map(c => c.title);

const least_enrollement = published_courses.find(c => c.students < 15);

console.log(`Published Courses: ${published_titles.join(", ")}`)
console.log(`First Low Enrollment Course: ${least_enrollement.title}`)
console.log(`Published Course Count: ${published_courses.length}`)

