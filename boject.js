// primitive
// basic primary data type
const age = 34;
const school = 'Pirozali High School';
const isPassed = true;
// let isDeveloper;

const subjects =['Bangla','English','Biology','Math','Social work'];

// JavaScript Object
const phone ={
    // key:  value
    brand: 'Apple',
    model: 'I phone 17 pro max',
    color: 'Orange',
    disply: "12'5",
    camera: '14mp'
    
}
// phone.model = 'I phone 17 Pro' //changes value
// const keys =Object.keys(phone); // this method will give value like array
// console.log(keys);


const values =Object.values(phone)
// console.log(values);

// dot symbol diye boject ar property er value access kora
const disply = phone.disply;
// console.log(disply);

// bracket Notation
// console.log(phone['model']);
const pModel = phone['model']
// console.log(pModel);



// non-primitive

const college ={
    name:'vnc',
    class:[1,2,3,4],
    events:['science fair','bijoy debosh','21 Feb','16 December'],
    unique:{
        dress: 'Pant , shirt',
        colors: 'white and black',
        result:{
            gpa: 5,
            merit: 'top most'
        }
    }

}
console.log(college.unique.result.gpa); // nestet object does access like this .
console.log(college.events[1]); // how does access object inside it array like this.
delete college.class; // if can delet inside the object property you can delete like this.
console.log(college);