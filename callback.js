/** Asynchronous vs Synchronous in JavaScript
 * 1. Synchronous JavaScript:
 * Definition: Synchronous code is executed sequentially, line by line, one after the other. Each operation must complete before the next one begins.
 * Characteristics:
 * Blocking: Each task waits for the previous one to complete.
 * Simpler to understand and reason about.
 * Can lead to performance issues if a task takes too long to complete (e.g., a slow network request or a large file read).
 *  examople of this thread blocking code
 *  console.log("Start");
 *  // Simulating a time-consuming operation
 *  for (let i = 0; i < 1000000000; i++) {}
 *     console.log("End");
 *
 * 2. Asynchronous JavaScript
 * Definition: Asynchronous code is executed without waiting for previous tasks to complete. Instead, 
 * tasks are started and handled independently, allowing the program to continue running other operations.
 * 
 * Characteristics:
 * Non-blocking: Tasks can run in parallel, and the program can handle multiple operations simultaneously.
 * Uses callbacks, promises, and async/await to manage asynchronous behavior.
 * Essential for tasks like network requests, file I/O, timers, and more.
 * 
 * console.log("Start");

setTimeout(() => {
    console.log("Timeout completed");
}, 2000); // 2-second delay

console.log("End");

Output:
Start
End
Timeout completed

 **/
/** Callback
 * Definition:
 * Callback in js is a function athat are pass in the function as an arguments to another function,
 * to be executed after the completion of that function.
 *
 * Purpose:
 * Callbacks are used to handle asynchronous operations, such as reading files, making API calls, or handling events.
 */
console.log("start"); // synchronous code
function fetchData(callback,callback2) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();  // Calling the callback function after the asynchronous operation
    }, 1000);
    setTimeout(() => {
        callback2("Data fetched");  // Calling the callback function after the asynchronous operation
    }, 2000);
}

function processData() {
    console.log("Processing data");
}
function pd(str){
    console.log(str);
}

fetchData(processData,pd); // here we are passing the processData as a callback 
console.log("end!!!!!!!!!!!"); // synchronous code