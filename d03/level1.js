// 1 type checking 
let firstName = "Aug"
let lastName = "COSTA"
let country = "Benin"
let city = "Cotonou"
let age = 22
isMarried = false
year = 2022

console.log(
`${typeof firstName}
${typeof lastName}
${typeof country}` // did'nt finish it but you get the point
)

// 2 type checking (ternary operator -> conditon ? yes : not)
console.log(
    typeof '10' == 10 
    ? "there are equal"
    : "there are not equal"
)

// 3 type checking
console.log(
    parseInt('9.8') == 10
    ? "there are equal"
    : "there are not equal"
);


// 4-1 truthy value 
console.log(
    1 == true,
    " element".length > "okay".length,
    true == true
)

// 4-2 falsy value
console.log(
    0 == true,
    "element" == NaN,
    "" == true
)

// 5 truthy and falsy value
// != -> is not equal in terms of value so 4 != '4' is false because value are same
// !== -> compare value and datatypes 
console.log(
    4 > 3,     // true
    4 >= 3,    // true
    4 < 3,     // false
    4 <= 3,    // false
    4 == 4,    // true
    4 === 4,   // true
    4 != 4,    // false
    4 !== 4,   // false
    4 != '4',  // false
    4 == '4',  // true because == compare value not type
    4 === '4', // false because === compare value and type
    "python".length != "jargon".length // false
);

// 6 truthy and falsy value
console.log(
    4 > 3 && 10 < 12,     // true
    4 > 3 && 10 > 12,     // false
    4 > 3 || 10 < 12,     // true
    4 > 3 || 10 > 12,     // true
    !(4 > 3),             // false
    !(4 < 3),             // true
    !(false),             // true
    !(4 > 3 && 10 < 12),  // false
    !(4 > 3 && 10 > 12),  // true
    !(4 === '4'),         // true
    !("python".includes('on')) && !("dragon".includes('on'))  // false
);

// 7 Date object handling
let date = new Date()
console.log(
    date,
    date.getFullYear(),
    date.getMonth() +1 , // + 1 because getMonth() gives us month[0-11]
    date.getDate(),
    date.getDay(), // weeks day [0-6]
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getTime()
);


