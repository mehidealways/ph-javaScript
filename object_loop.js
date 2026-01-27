// How does work object loop shown in here
const mobail ={
    brand:'sumsung',
    price:25000,
    color:'black',
    camera: '12mp',
    isNew:true
}

// loop in here
// for of : use on array
// for in : use on Object

for(const prop in mobail){
    console.log(prop);
    console.log(mobail[prop]);
}


const keys = Object.keys(mobail);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobail[key]);
}

// Another way to declare object

// first one 01
const pancil = new Object() // can you give any value in object
console.log(pancil);

// number 02
const rubber = Object.create({})