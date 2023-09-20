// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* let age = prompt('Enter your age');

if(age > 21){
    alert('biri khite parbo ');
}else{
    let needAge =   21 -age; 
    alert(` biri khite parbo nah. you need to wait ${needAge} years` );
} */


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.



/* let myAge = prompt('Enter your Age');

if (myAge > 20){
    let diff =  myAge - 20;
    
    if(diff == 1){
        alert(`you are ${diff} year older then me`);
    }else{
        alert(`you are ${diff} years older then me`);
    }
}else if( myAge == 20 ){
    alert('yor are same age as me');
}else {
    let diff = 20 - myAge;
    if(diff == 1){
        alert(`you are ${diff} year younger then me`);
    }else{
        alert(`you are ${diff} years younger then me`);
    }
    
} */

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.


 /*  let a = 2
  let b = 3

  if(a>b){
    console.log('a is greater than b');
  }else{
    console.log('b is greater than a');
  }

  (a>b) ? console.log('a is greater than b'):console.log('b is greater than a'); */


//   Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/* let number = 9;

let cal = number % 2;

if(cal === 0){
    console.log(`${number} is even number`);
}else {
    console.log(`${number} is odd number`);
} */

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

var grade = 101;

/* switch (grade) {
    case ((grade <= 100) && (grade >= 80 )):
        console.log('grade A+');
        break;
    
    case ((grade >=70)  && (grade <=79)):
        console.log('grade A');
        break;

    case ((grade >=60)  && (grade <=69)):
        console.log('grade B');
        break;

    case ((grade >=50)  && (grade <=59)):
        console.log('grade B+');
        break;
    case ((grade >=40)  && (grade <=49)):
        console.log('grade C');
        break;
    case ((grade >=33)  && (grade <=39)):
        console.log('grade D');
        break;
    case ((grade >=0)  && (grade <=32)):
        console.log('grade F');
        break;

    default:
        console.log('Please enter valid number');
        break;
} */

/* if (((grade <= 100) && (grade >= 80 ))) {

    console.log('grade A+');
} else if(((grade <= 79) && (grade >= 70 ))) {
    console.log('grade A');
}
else if(((grade <= 69) && (grade >= 60 ))) {
    console.log('grade B+');
}
else if(((grade <= 59) && (grade >= 50 ))) {
    console.log('grade B');
}
else if(((grade <= 49) && (grade >= 40 ))) {
    console.log('grade C');
}
else if(((grade <= 39) && (grade >= 33 ))) {
    console.log('grade D');
}
else if(((grade <= 32) && (grade >= 0 ))) {
    console.log('grade F');
}else{
    console.log('Please input Valid number');
}
 */


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer



/* let input = 'February';

if ((input == 'September') || (input == 'October') || (input == 'November')){
    console.log('Autumn');
}else if((input == 'December') || (input == 'January') || (input == 'February')){
    console.log('Winter');
}else if((input == 'March') || (input == 'April') || (input == 'May')){
    console.log('Summer');
}else{
    console.log('Please enter right month');
} */



// Check if a day is weekend day or a working day. Your script will take day as an input.

/* What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day. */
let date = new Date();
let day = 'Friday';

if (day == 'Monday'){
    console.log(`${day} is weekend.`);
} else if(day == 'Saturday' || 'Monday' || 'Sunday' || 'Tuesday' || 'Wednesday'|| 'Thursday'){
    console.log(`${day} is working day.`);
}



