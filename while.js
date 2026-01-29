// const number = 7;
// if (number < 10) {
//   console.log('Choto akta number paisi');
// }
// console.log('somethings new is cooking')

// This is while looop

// let num = 0;
// while (num < 5) {
//   console.log('Looooooooooping' num);
  // num = num + 1;
  // num += 1;
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

// find even number
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

// let total = 30;
// for (let i = 1; i <= 20; i++){
//   if (i % 3 === 0) {
//     console.log(i);
//     total = total + i
//   }
// }
// console.log('Total of the numbers:',total);

// for(let x =1; x <=10; x++){
//   if(x %2 ===0){
//     console.log(x);
//   }

// }
// let sum = 0;
// for(let y =11; y <=20; y++){
//   sum = sum + y
//   console.log(y);
// }
// console.log('sub of number from 11 to 20:',sum);



// // <----- reverse way while loop----->

// let n = 10;
// while (n >=0){
//   console.log(n);
//   n--;
// }
// const array1 =[1,2,3,4,5]
// const array =[6,7,8,9,1]
// let result =[]

// for(const item of array1 + array ){
//   result.push(item)
// }
// console.log(result);

const numbers = ['Tom', 'Tim', 'Tin', 'Tik'] 

let result ="";
for(const x of numbers){
  
  result += x;
}
console.log(result);