// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

var js = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
// console.log(name);

// Print the length of the string on the browser console using console.log()
// console.log(js.length);


// Change all the string characters to capital letters using toUpperCase() method
// console.log(js.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
// console.log(js.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
// console.log(js.substring(0,4));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

// console.log(js.slice(3,21));

// Check if the string contains a word Script using includes() method

// console.log(js.includes('Days'));

// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// console.log(js.split(" "));


// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let n='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(n.split(','));


// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

// let n = '30 Days Of JavaScript';
// console.log(n.replace('JavaScript','Python'));


// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

// var b = '30 Days Of JavaScript';

// console.log(b.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

// var j='30 Days Of JavaScript';
// console.log(j.charCodeAt('J'));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// var j= '30 Days Of JavaScript';
// console.log(j.indexOf('JavaScript'));


// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// var j= '30 Days Of JavaScript';
// console.log(j.lastIndexOf("JavaScript"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// var p='You cannot end a sentence with because because because is a conjunction';
// console.log(p.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// console.log(p.lastIndexOf("because"));
// console.log(p.search("because"));


// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

// var k= '30 Days Of JavaScript';

// console.log(k.trim( ));
// console.log(k.startsWith('30 Days Of JavaScript'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// console.log(k.endsWith('30 Days Of JavaScript'));


// Use match() method to find all the a’s in 30 Days Of JavaScript
// var k= '30 Days Of JavaScript';
// console.log(k.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// var text1 = '30 Days of';
// var text2 = ' JavaScript';

// var r=(text1.concat(text2));
// console.log(r.repeat(2));


// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

// var t1= 'There is no exercise better for the heart than reaching down and lifting people up.';
// var t2='help';
// console.log(`The quote "${t1}" by John Holmes teaches us to "${t2}" one another.`);

// var t3= "by Mother Teresa";
// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."-${t3}.
// `);


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// var a='10';
// var b= 10;

// let d= parseInt(a);

// console.log((d===b));


// Generate a random number between 0 and 100 inclusively.
var f = Math.floor(Math.random()*(102-75)+75);

console.log(f);

var p = "python";

console.log(p.includes('On'));

var s= "JavaScript";

console.log(Math.floor(Math.random()*s.length));

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// var p='You cannot end a sentence with because because because is a conjunction';
// l= p.substr(p.indexOf('because'), 'because because because'.length);
// console.log(l);


// const sentence = 'You cannot end a sentence with because because because is a conjunction';
// const phrase = sentence.substr(sentence.indexOf('because'), 'because because because'.length);

// console.log(phrase);


// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// var p = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// var f = 'love';

// const r =new RegExp(f,'gi');
// var c=(p.match(r) || []).length;
// console.log(c);


// var p = 'You cannot end a sentence with because because because is a conjunction';
// var f = 'because';

// const r =new RegExp(f,'gi');
// var c=(p.match(r) || []).length;
// console.log(c);

