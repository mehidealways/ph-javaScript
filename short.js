const persons = ['mahin','hasan','manik','mahabub','milon'];

const sortPerson = persons.sort();
console.log(sortPerson);
// sort --->
// const numbers =[1,2,4,5,6,7];
/**
 * Ascending ----> smaller to larger.
 * Descending ----> larger to smaller
 */
const numbers =[,12,4,53,6,17,1];
// const numbers_asc = numbers.sort(); --> not working porperly
// const numbers_asc = numbers.sort(function (a,b){a-b});
const numbers_asc = numbers.sort(function (a,b){return a-b});
const numbers_dsc = numbers.sort(function (a,b){return a-b});
console.log(numbers_asc);