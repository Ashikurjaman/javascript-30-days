/* const webTechs = [
    'HTML',
    'CSS12',
    'JavaScript',
    'React11',
    'Redux',
    'Node13',
    'MongoDB'
  ] */

  /* let newArray =[];
//   let j = 0;
for (let i = 0; i < webTechs.length; i++) {

     newArray = webTechs[i].length;
     if(newArray.length <= newArray.length){
        console.log(newArray);
     }
    
}
// console.log(newArray); */




/* let ia_country = [];

for (let i = 0; i < countries.length; i++) {
  const element = countries[i];

  if(element.indexOf('ia') === -1){
   
  }else{
    ia_country.push(element);
  }
}
console.log(ia_country); */






/* In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'. */


/* let ia_country = [];

for (let i = 0; i < countries.length; i++) {
  const element = countries[i];

  if(element.indexOf('land') === -1){
    // console.log('Country not found');
  }else{
    ia_country.push(element);
  }
}
console.log(ia_country); */


// Using the above countries array, find the country containing the biggest number of characters.



/* let bigNameCountry = '';


for (let i = 0; i < countries.length; i++) {

  const element = countries[i];


  if(element.length >bigNameCountry.length){
    bigNameCountry = element;

  }
}


console.log(bigNameCountry); */

// Using the above countries array, find the country containing only 5 characters.
/* const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let bigNameCountry = [];
let bigNameCountry2 = [];


for (let i = 0; i < countries.length; i++) {

  const element = countries[i];


  if(element.length == 5){
    bigNameCountry = element;
    bigNameCountry2.push(bigNameCountry);

  }
}
console.log(bigNameCountry2); */




/* let web = [];

for (let i = 0; i < webTechs.length; i++) {
  const element = webTechs[i];

  if(element.length > web.length){
    web = element;
  }
  
} */
// console.log(web);

/* let webTec = webTechs.map(w=>[w,w.length])

console.log(webTec); */
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

/* const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let acronym = mernStack.map(m=>m[0]).join('');
console.log(acronym); */

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.


/* for (const webTec of webTechs) {
    console.log(webTec);
} */


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// let f = ['banana', 'orange', 'mango', 'lemon'];

/* let g = [];

  for (let i = f.length -1; i >= 0; i-- ){
    const element = f[i];
   g.push(element) ;
  }
  console.log(g);

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ] */
/* 
  for (const full of fullStack) {
    console.log(full[0].concat(full[1]));
  } */
/* 
  for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j]);
    }
}
 */




// let newArray = webTechs.map(tech =>[tech,tech.length]);
// let mernStack = webTechs.map(tech =>tech[0]).join('');
// let mernStack1 = webTechs.sort() ;
// let mernStack2 = webTechs.reverse() ;
    
     

  // console.log(newArray);
//   console.log(mernStack2);



// Exercises 3


// Copy countries array(Avoid mutation)
/* const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] */
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// const copyCountries = [...webTechs];


// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

// let v =copyCountries.concat(mernStack);
// console.log(v.sort());

// Extract all the countries contain the word 'land' from the countries array and print it as array
/* 
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let newArray = [];
for (let i = 0; i < countries.length; i++) {
  const element = countries[i];
  if(element.indexOf('land') ===-1 ){
    
  }else{
    newArray.push(element);
  }
  
}
console.log(newArray); */


// Find the country containing the hightest number of characters in the countries array

/* const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let biggest = '';

for (let i = 0; i < countries.length; i++) {
  if(countries[i].length > biggest.length){
    biggest = countries[i];
  }
  
}
console.log(biggest); */


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denm',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let biggest = [];

for (let i = 0; i < countries.length; i++) {
  if(countries[i].length === 4){
    biggest.push(countries[i]);
  }
  
}
console.log(biggest);