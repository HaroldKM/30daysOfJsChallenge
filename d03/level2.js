// 1 prompt to user
/*
let base = prompt("Enter base:")
let height = prompt("Enter height:")
console.log(
    "Enter base: " + base + "\n" +   "Enter height: " + height + "\n" +
    `the area of the triangle is: ${0.5 * base * height}` 
)

// 2 prompt to user
let a = parseInt(prompt("Enter side a: "))
let b = parseInt(prompt("Enter side b: "))
let c = parseInt(prompt("Enter side c: "))

console.log(
`side a: ${a}\nside b: ${b}\nside c: ${c}\nthe perimeter of the triangle is: ${ a + b +c}`
);

// 3 prompt to user
let length = parseInt(prompt("Enter length:"))
let width = parseInt(prompt("Enter width:"))
let rectangleArea = length * width
let rectanglePerimeter = 2 * (width + length)
console.log(
    `rectangleArea: ${rectangleArea}\nrectanglePerimeter ${rectanglePerimeter}`
)


// 4 prompt to user 
let r = parseInt(prompt("Enter radius:"))
const PI = Math.PI
let area = r * r * PI
let c = 2 * PI * r
console.log(
    `area: ${area}\nc: ${c}`
);


// 5 calculate the slop for y = 0
let a = parseInt(prompt("Enter a: "))
let b = parseInt(prompt("Enter b: "))
let x = -b / a
console.log(x)


// 6 prompt to user
let x1 = parseInt(prompt("Enter x1"))
let x2 = parseInt(prompt("Enter x2"))
let y1 = parseInt(prompt("Enter y1"))
let y2 = parseInt(prompt("Enter y2"))

console.log(
    `${(y2 - y1) / (x2 - x1)}`
);

// 7 compare the different value [will do it with condition later on]

// 8 calculate the value of y = x² + 6x + 9
let a = parseInt(prompt("Enter a: "))
let b = parseInt(prompt("Enter b: "))
let c = parseInt(prompt("Enter c: "))
let delta =  (b**2) - (4 * a * c ) 
delta === 0 ? console.log("x0 = " +  -b / 2 * a): console.log('delta != 0'); 


// 9 prompt to user
let hours = parseInt(prompt("Enter hours:"))
let rate = parseInt(prompt("Enter rate: "))
let toBePaid = hours * rate
console.log("you will be paid: " + toBePaid)


// 10 compare different value (ternary operator)
let userName = prompt("Enter your name:")
userName.length > 7 ? console.log("your name is long"): console.log("your name is short")


// 11 prompt to user
let firstNam = prompt("Enter firstName: ")
let lastNam = prompt("Enter lastName: ")
firstNam.length > lastNam.length 
? console.log(`your name, ${firstNam} is longer than your family name, ${lastNam}`) 
: console.log(`your name, ${firstNam} is shorter than your family name, ${firstNam}`)


// 12 calculate age 
let myAge = parseInt(prompt("Enter my age: ")) 
let yourAge = parseInt(prompt("Enter your age: "))

myAge > yourAge 
? console.log(`i'm ${myAge - yourAge} older than you`)
: console.log(`you are ${yourAge - myAge} older than me`)


// 13 calculate
let actualYear = new Date().getFullYear()
let userBirthYear = parseInt(prompt("Enter your birth year: "))
let userAge = actualYear - userBirthYear 
userAge >= 18 
? console.log(`greaty you can drive`)
: console.log(`you have to wait ${18 - userAge} year before driving`);


// 14 calculate second person can live
let numberOfYear = parseInt(prompt("Enter number of year: "))
const secondInOneYear = 31563000
console.log(`you lived ${secondInOneYear * numberOfYear} second`)


// 15 human redable time
let humanDate = new Date()
let year = humanDate.getFullYear()
let month = humanDate.getMonth() + 1 // month in js [0-11]
let day = humanDate.getDate() 
let hour = humanDate.getHours()
let minute = humanDate.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${minute}`)
// for this exercise all possible declination can be made just by changing variable position.
*/

