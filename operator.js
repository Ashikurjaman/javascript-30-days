// const now = new Date()
// console.log(now) 

// const now = new Date()
// console.log(now.getFullYear()) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
 // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)


// const now = new Date();

// let m=now.getMonth();
//  let cm = m+1;
// console.log(cm) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// const now = new Date()
// console.log(now.getDay()) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)


// const now = new Date() //
// console.log(now.getTime())

// const now = new Date();
// const secondsSinceEpoch = Math.floor(now.getTime() / 1000);

// console.log(`Seconds since January 1, 1970: ${secondsSinceEpoch}`);


// const now = new Date();
// const inputDate = new Date('2000-01-01');
// console.log(Math.floor((now - inputDate)/1000));

// const sideA = parseFloat(prompt('Enter the length of side A:'));
// const sideB = parseFloat(prompt('Enter the length of side B:'));
// const sideC = parseFloat(prompt('Enter the length of side C:'));

// const perimeter = sideA + sideB + sideC;

// console.log(perimeter);

/* Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?


let h = prompt('hours');
let hr = prompt('Enter rate per hour');

const week = h*hr;

console.log(week); */

// If the length of your name is greater than 7 say, your name is long else say your name is short.


/* let name = "ashik";

if (name.length > 7){
    console.log("your name is long");
}else{
    console.log('your name is short');
}
 */


// Compare your first name length and your family name length and you should get this output.

/* let myName = 'Ash';
let familyName ='khan';


if (myName.length > familyName.length){
    console.log('Your name is greater then your family name ');
}else{
    console.log('Your name is shorter then your family name ');
}
 */

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

/* let myAge = 250
let yourAge = 25

let dif = myAge-yourAge;

console.log(dif); */


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.


/* let yearBirthday= prompt("enter the year");
let d = new Date();
let noeYear= d.getFullYear()
console.log(noeYear);

let calc =noeYear - yearBirthday ;
alert (`You are  ${calc} years old`); */


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

/* 
let yearBirthday= prompt("enter the year");
let d = new Date();
let noeYear= d.getFullYear()

if (isNaN(yearOfBirth) || yearOfBirth < 1900 || yearOfBirth > currentYear) {
  console.log("Please enter a valid birth year.");
} else{
    let getSecondPerYear = 365*24*60*60;

        let calc =noeYear - yearBirthday ;

            let seconds = calc*getSecondPerYear;
             let getHours = seconds /3600;
                console.log(seconds);
                    console.log(getHours);
}
console.log(noeYear);

 */

// Create a human readable time format using the Date time object

let currentDate = new Date();

let year = currentDate.getFullYear();
let month = (currentDate.getMonth() + 1);
let day = currentDate.getDay();
let hour = currentDate.getHours();
let min = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

let getResult = `${year}-${month}-${day}`;
console.log(getResult);