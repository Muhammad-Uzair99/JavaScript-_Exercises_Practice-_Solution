/*
Write a JavaScript program to display the current day and time in the following format.

Sample Output : 
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const hours = today.getHours() % 12 || 12;
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const ampm = today.getHours() < 12 ? "AM" : "PM";

console.log(`Today is: ${days[today.getDay()]}
Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);