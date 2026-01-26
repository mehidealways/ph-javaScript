// const number = 7;
// if (number < 10) {
//   console.log('Choto akta number paisi');
// }
// console.log('somethings new is cooking')

// This is while looop

// let num = 0;
// while (num < 5) {
//   console.log('Looooooooooping' num);
//   // num = num + 1;
//   // num += 1;
//   num++;
// }

// Range
// let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// let num = 50;
// while (num <= 100) {
//   console.log(num);
//   num++;
// }

// Sum with while loop

// let num = 1;
// let sum = 0;
// while (num <=10) {
//   console.log(num);
//   sum = sum + num;
//   console.log('sum:',sum);
//   num++;
// }

// Even number
// let num = 1;  // Loop Variable
// while (num <= 10) {   // Loop condition
//   console.log(num); // Loop statement
//   if (num % 2 === 0) {
//     console.log('even number:', num)
//   }
//   num++; // loop variable change
// }

// This is For-Loop

// for (let num = 0; num < 5; num++) {
//   console.log(num);

// }

// odd even

// for (let i = 0; i <= 10; i++){
//   console.log(i);
// }

// fing even number
// for (let i = 0; i <= 20; i=i+2){
//   console.log(i);
// }

// sum with for loop
// let sum = 0;
// for (let i = 11; i <= 20; i++) {
//   sum = sum + i;
//   console.log(i);
// }
// console.log('some of number from 11 to 20 is:',sum);

//how to get odd number using for loop

// for (let i = 0; i < 20; i++){
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// give me the list numbers btween 1 to 30 divisible by5

// for (let i = 1; i < 30; i++){
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 30; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// give me the sum numbers btween 1 to 20 divisible by 3

let total = 30;
for (let i = 1; i <= 20; i++){
  if (i % 3 === 0) {
    console.log(i);
    total = total + i
  }
}
console.log('Total of the numbers:',total);