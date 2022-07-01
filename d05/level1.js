// // 1 empty array
// const emptyArray = []

// // 2 array with more than 5 elements
// const arrayWithElement = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// // 3 array length
// console.log("arrayWithElement size " + arrayWithElement.length)

// //4-1 get first array element
// console.log(`first array element: ${arrayWithElement[0]}`)

// //4-2 get middle array element
// console.log(`middle array element: ${arrayWithElement[Math.floor(arrayWithElement.length / 2)]}`)

// //4-3 get middle array element
// console.log(`last array element: ${arrayWithElement[arrayWithElement.length  - 1]}`)

// // 5 multiple datatypes of array
// const mixedDataTypes = [
//     1,
//     "another",
//     true,
//     false,
//     12.3,
//     "okay"
// ]

// console.log("mixedDataTypes lenght: " + mixedDataTypes.length);
// console.log("mixedDataTypes lenght: " + Math.floor(mixedDataTypes.length / 2));

// // 6 declare array
// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon"
// ]

// let itCompaniesSize = itCompanies.length
// let middleArrayElement = Math.floor(itCompaniesSize / 2)
// // 7 printing array
// console.log(itCompanies)


// // 8 array length
// console.log(itCompanies.length);

// // 9-1 first company
// console.log(itCompanies[0])

// // 9-2 middle company 
// console.log(itCompanies[middleArrayElement])

// // 9-3 last commpany
// console.log(itCompanies[itCompaniesSize - 1]);

// // 10 print out each company -> to print out each just do arrayName[each index val]

// // 11 print out each company name to uppercase -> i will do it for the frist one you can follow along doing the same
// console.log(itCompanies[0].toUpperCase())

// // 12 transform the array to sentence
// console.log(itCompanies.join(" ") + " are big IT companies ")

// // 13 check if company exist
// // let userCompanie = prompt("Enter company")
// // itCompanies.includes(userCompanie)
// // ? console.log(userCompanie + " exitst")
// // : console.log("not found")

// // 14 filter company which have more than one '0' -> i will come back to you

// // 15 sort array
// itCompanies.sort()
// console.log(itCompanies)

// // 16 reverse the array using reverse method
// // console.log(itCompanies.reverse());

// // 17 slice the array
// console.log(itCompanies.slice(0, 3)) // ending positon is 3 because it doesn't include the array

// // 18 slice out the last 3 company 
// console.log(itCompanies.slice(middleArrayElement + 1, itCompaniesSize))

// // 19 slice out middle itCompanies
// console.log(itCompanies.slice(middleArrayElement -1 , middleArrayElement + 1));


// // 20 remove the first itCompanies
// itCompanies.shift()
// console.log(itCompanies)

// // 21 remove the middle itCompanies
// console.log(itCompanies.splice(middleArrayElement, 1));

// // 22 remove the last itCompanies
// console.log(itCompanies.pop())  

// // 23 remove all itCompanies
// console.log(itCompanies.splice())

console.log("level1");
