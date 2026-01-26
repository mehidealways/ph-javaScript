/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 20;
let isStudent = true;
let fare = 800;

if (age < 10) {
  console.log('Free for you');
} else if (age >= 60) {
  let discount = fare * 0.15;
  let finaFare = fare - discount;
  console.log('You have 15% discount ='+ finaFare);
} else if (isStudent) {
  let discount = fare * 0.50;
  let finaFare = fare - discount;
  console.log('You have 50% discount =' + finaFare);
} else {
  console.log(fare);
}