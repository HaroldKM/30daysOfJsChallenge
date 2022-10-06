// 1
// console.log(countries);
// console.log(webTechs);

// 2 remove ponction(use replace with regEx)and change
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let regEx = /[.,]/g //take globally everything that is .,
let textWithoutPonctuation = text.replace(regEx, '')// remove ponctuation
let words = textWithoutPonctuation.split(' ') // split string into array
console.log(words)
console.log(words.length)


// 3 add and remove item

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.includes('Meat')
? console.log("Already in shopping cart")
: shoppingCart.unshift('Meat') // add Meat at the beginning of the shopping cart

shoppingCart.includes('Sugar')
? console.log("Sugar already in shopping cart")
: shoppingCart.push('Sugar')

// let isAllergic = confirm('Are you allergic to Honey?')
// isAllergic 
// ? console.log("Heney so you are allergic")
// : shoppingCart.push('Honey')

console.log(shoppingCart)

// 3-1 modify array element
let index = shoppingCart.indexOf('Tea')
shoppingCart[index] = 'Green tea'
console.log(shoppingCart)

// 4 check if Ethiopia exist
countries.includes("Ethiopia")
? console.log("ETHIOPIA already in")
: countries.push('Ethiopia')

// 5 check if Sass exit
webTechs.includes("Sass")
? console.log("Sass is a CSS preprocess")
: webTechs.push('Sass')
console.log(webTechs);

// 6 concatenate
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)