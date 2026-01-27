const country = 'Bangladesh';
const division = "Dhaka";
const distict = `B-Baria`;
// console.log(typeof country);

// Array is mutable ----> you can change the array elements

const numbers =[54,35,25,26,77]
// console.log(numbers.length);
// console.log(numbers[1]);

//  string is immutable ---> no changeable
const capital = 'dhaka';
// console.log(capital.length);
// console.log(capital[3]);


// String reverse
let reverse = ''
const sentence = 'I am learning web Debv'
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);
// ignore this solution
let rev = ''
for (let i =0; i <sentence.length; i++){
//    console.log(i); 
//    console.log(sentence[i]);
const letter = sentence[i];
rev = letter + rev
}
// console.log(rev);

// Shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);