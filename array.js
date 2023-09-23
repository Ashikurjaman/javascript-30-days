// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// // console.log(arr[4])

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// // console.log(charsInJavaScript)

// const fruits = ['banana', 'orange', 'mango', 'lemon']

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]
// console.log(lastFruit);

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]

// const thirdList = firstList.concat(secondList);
// // console.log(thirdList);

// // const numbers = [1,4,3,2,5,6,7,8,9,10,11]
// // console.log(numbers.slice(4,8))

// /* const numbers = [1, 2, 3, 4, 5]
// numbers.splice(3,1)
// console.log(numbers)



// let u = itCompany.map(function (company){
//     return company.toUpperCase();
// })
// console.log(u); */

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// const  itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'Amazon' ];

/* let found = itCompany.indexOf('Amazon');

if (found == -1){
    console.log('Company not Found');
}else{
    
    console.log(`${found} is found`);
}

console.log(found); */

const  itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM','Oracle', 'Amazon','lll' ];

// Remove the first IT company from the array
/* 
let cl = itCompany.splice();
console.log(itCompany);

let c=itCompany.shift();
// console.log(itCompany); */














 // Slice out the middle IT company or companies from the array

/* const middleIndex = Math.floor(itCompany.length / 2);
// console.log(middleIndex);

if (itCompany.length % 2 === 1){
     const remove = itCompany.splice(middleIndex,1) 
     console.log(remove);
}else{
    const remove = itCompany.splice(middleIndex-1,2) 
    console.log(remove);
}

console.log(itCompany); */
 

/*  loop */

// Develop a small script which generate a six characters random id
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let newArray ='';


// for (let i = 0; i < 10; i++) {
   
//     const cl=characters.length;
//     var r =(Math.floor(Math.random()*cl));
//     if(newArray.indexOf(r) === -1){
//         newArray +=characters.charAt(r);
//     }
    
    
// }
// console.log(newArray);




// Slice out the first 3 companies from the array

/* var n= (itCompany.splice(0,4));
// var n= (itCompany.splice(3,9));

console.log(n); */











// Sort the array using sort() method

/* console.log(itCompany.sort());
// Reverse the array using reverse() method
console.log(itCompany.reverse()); */
















// function hasmoreO(company){
//     let count = 0;
//     for (let i = 0; i < company.length; i++) {
//         if(company[i].toLowerCase() === 'o'){
//             count++;
//             if(count > 1){
//                 return true ;
//             }
//         }
        
//     }
//     return false;
// }

//         const newArray = [];

//         for(company of itCompany){
//             if(!hasmoreO(company)){
//                 newArray.push(company);
//             }
//         }
//         console.log(newArray);



// const fruits = ["Banana", "Orange", "Apple", "Mango", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(3, 1));




// const characters = '0123456789ABCDEF';
let newArray ='';


/* for (let i = 0; i < 6; i++) {
   
    const cl=characters.length;
    var r =(Math.floor(Math.random()*cl));
    if(newArray.indexOf(r) === -1){
        newArray +=characters.charAt(r);
    }
    
    
} */
// console.log(`#${newArray}`);


let rgbColor ='RGB(';
for (let i = 0; i < 3; i++) {
   
    const cl=256;
    var r =(Math.floor(Math.random()*cl));
    rgbColor +=r;

    if(i<2){
        rgbColor+=',';
    }
    
}
rgbColor +=')';
console.log(rgbColor);


// Using the above countries array, create the following new array.

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

  /* let newCountryArray = [];
//   let newCountryArrayLen = [];

  for (let i = 0; i < countries.length; i++) {
    const newCountry = countries[i].toUpperCase();
    newCountryArray.push(newCountry);
    newCountryArray.push(newCountry.length);
    newCountryArray.push(newCountry.slice(0,3));
  } */

//   console.log(newCountryArray);
//   console.log(newCountryArrayLen);

//   Using the above countries array, create an array for countries length'.

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let newCoun = [];

for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    // console.log(element);
    if (element.indexOf('land') === 3) {
        // console.log(element);
        newCoun.push(element);
    }else{
        // newCoun.push(element);
        console.log(element);
    }
    
}
console.log(newCoun);