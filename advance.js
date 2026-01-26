// const isLeader = true;
// if (isLeader) {
//   console.log('Lider asche chair sar');
// }
// else {
//   console.log('vag sala dure giye mor');
// }



// const isPassed = true;
// if (isPassed) {
//   console.log('tmi amar noyon ar moni sunar khuni');
// }
// else {
//   console.log('tore hanga diya dimo');
// }






/**
 * যদি score >= 80

যদি hasAttendance === true → "Grade: A+"

না হলে → "Grade: A (Attendance low)"

যদি score >= 60 কিন্তু < 80

যদি hasAttendance === true → "Grade: B"

না হলে → "Grade: C"

যদি score < 60

"Fail"
 */

// let score = 72;
// let hasAttendance = true;

// if (score >= 80) {
//   if (hasAttendance === true) {
//     console.log('Grade: A');
//   }
//   else {
//     console.log('Attendance is Low');
//   }
// } else if (score >= 60) {
//   if (hasAttendance === true) {
//     console.log('Grade:B');
//   } else {
//     console.log('Grade:B');
//   }
// } else {
//   console.log('your are fucking fail');
//   }



  /**
  If totalAmount >= 5000

যদি isPremiumMember === true → "You get 25% discount"

না হলে → "You get 15% discount"

If totalAmount >= 3000 but < 5000

যদি isPremiumMember === true → "You get 15% discount"

না হলে → "You get 5% discount"

If totalAmount < 3000

যদি isPremiumMember === true → "You get 5% discount"

না হলে → "No discount"
 */

let totalAmount = 1000;
let isPremiumMember = true; 

if (totalAmount >= 5000) {
  if (isPremiumMember === true) {
    let discount = totalAmount * 0.25;
    let amount = totalAmount - discount;
    console.log('You have get : 25% discout');
    console.log('You have get : 25% discout :'+amount);
  } else {
    console.log('You get 15% discount');
  }
} else if (totalAmount < 3000 ) {
  if (isPremiumMember === true) {
    let discount = totalAmount * 0.15;
    let amount = totalAmount - discount;
    console.log('You have 15% discount :' + amount);
  } else {
    if (isPremiumMember ) {
      
      console.log('You have 5% discount :' + amount);
    } else {
      console.log('No discount');
    }
  }
} 

  
    
 
