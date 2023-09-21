import { country } from "./country.js";



// console.log(country); // Hello, Scaler


let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let c=(text.replace(/[.,]/g,''));

let newArray = c.split(' ')
console.log(newArray);

let cou = newArray.length;
console.log(cou);
