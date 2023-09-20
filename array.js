const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
// console.log(arr[4])

let js = 'JavaScript'
const charsInJavaScript = js.split('')

// console.log(charsInJavaScript)

const fruits = ['banana', 'orange', 'mango', 'lemon']

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit);

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]

const thirdList = firstList.concat(secondList);
// console.log(thirdList);

// const numbers = [1,4,3,2,5,6,7,8,9,10,11]
// console.log(numbers.slice(4,8))

const numbers = [1, 2, 3, 4, 5]
numbers.splice(3,1)
console.log(numbers)

