import { country } from "./country.js";



// console.log(country); // Hello, Scaler


/* let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let c=(text.replace(/[.,]/g,''));

let newArray = c.split(' ')
console.log(newArray);

let cou = newArray.length;
console.log(cou); */



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
/* add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

var n=shoppingCart.unshift('Meat');
var l = shoppingCart.push('Sugar');
var k = shoppingCart.splice(4,1);
shoppingCart[3] = 'Green Tea';

// console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if(country.indexOf('Ethiopia') == 1){
    console.log('it exists');
}else{
    var n=country.push('Ethiopia');
}
// console.log(country);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);


// The following is an array of 10 students ages:



// Sort the array and find the min and max age 

// console.log(ages.sort());

// const ni = ages.sort((a,b)=>b-a);
// console.log(ni);
// console.log(ni[0]);
// console.log(ni[ni.length-1]);

// Find the median age(one middle item or two middle items divided by two)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,26];

/* const nAges= ages.length/2;
console.log(nAges);

if(ages.length % 2 ===1){
    const rem=ages.splice(nAges,1) ;
    console.log(rem);
}else{
    const rem =ages.splice(nAges-1,2);
    console.log(rem);
} */

// console.log(ages);
// console.log(ages/ages.length);

const sumOfAges = ages.reduce((total, age) => total + age, 0);

// Step 2: Calculate the average age
const averageAge = sumOfAges / ages.length;

console.log('Average age:', averageAge);