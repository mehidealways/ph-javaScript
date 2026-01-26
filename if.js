// var weight = 50;

// if (weight < 30) {
//   console.log('i will carry it by myself');
// } else {
//   console.log('i will rent a riksha');
// }

// var weight = 30;
// if (weight <= 30) {
//   console.log('i will carry by my self');
// } else {
//   console.log('i will rent a reksha');
// }

// Multipul Condition

const salary = 25000;
const isBcs = true;
const height = 73;
const hasCar = false;
 
// if (salary > 20000 && height > 66) {
//   console.log('i will marry as soon as possible');
// }
// else {
//   console.log('i am not capabule to marry you');
// }

// ( || ) mane je kono akta korlei cholbe

// if (salary > 25000 || height > 72 || isBcs == true) {
//   console.log('your are most welcome');
// } else {
//   console.log('sorry it not for you');
// }

//more and more condition

//(&&&) mane sub gula full fell korty hobe
if (salary > 25000 && height > 72 && isBcs == true) {
  console.log('your are most welcome');
} else {
  // console.log('sorry it not for you');
}

//--------------COMPLEX CONDITION-----------------
if ((salary > 25000 && hasCar == true) || isBcs == true) {
  // console.log('tomar 14 gusti raji');
}

//----------multi level condition----------------

/**
 * Multi level condition
 */

const price = 4000;

if (price >= 5000) {
  const discount = price * 10 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else if (price >4000) {
  const discount = price * 5 / 100;
  const payAmount = price - discount;
  console.log(payAmount);
}
else {
  console.log(price);
}

