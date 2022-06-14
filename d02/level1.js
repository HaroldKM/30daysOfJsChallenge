// 1
let challenge = '30 Days Of JavaScript'

// 2
console.log(challenge);

// 3
console.log(`The length of challenge is: ${challenge.length}`); // ES6 interpolation methode

// 4 toUpperCase() -> change all character to upper case
console.log(challenge.toUpperCase());

// 5 toLowerCase() -> change all character to lower case
console.log(challenge.toLowerCase());

/*
 6 substring(startingIndex, stopingIndex) -> slice a string using startingIndex and 
 substring  doesn't include the character at the stopping index
 */
 console.log(challenge.substring(0, 3));

/*
 7 substring variation -> when giving only the startingIndex, it will slice
 from that index to the string's end
*/
 console.log(challenge.substring(3)); //Days of javascript

// 8 includes('substring') -> check if a string contains a subtring (case Sensitive return bool)
console.log(challenge.includes("Script"));

// 9 split() -> split a string to an array
console.log(challenge.split()); // ['30 Days Of JavaScript']

// 10 split() -> split a string to an array
console.log(challenge.split(' ')); // (4) ['30', 'Days', 'Of', 'JavaScript']

// 11 splite()
const GAFAM = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(GAFAM.split(', ')); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 12 replace(searchString, replaceString) -> replace a substring by another inside a string
console.log(challenge.replace('JavaScript', 'Python'));

// 13 charAt(index) -> return character at a certain index 
console.log(challenge.charAt(15));

// 14 charCodeAt(indexValue) -> return ASCII number of value at a certain index
console.log(challenge.charCodeAt(11)); // 74

/*
 15 indexOf(substr) -> Takes a substring and if the substring exists in a string it returns
 the first (first occurence) position of the substring if does not exist it returns -1
*/
console.log(challenge.indexOf('a'));

// 16 lastIndexOf(substr) -> same as indexOf but return the last occurence of the element
console.log(challenge.lastIndexOf('a'));

// 17 indexOf()
let occurence = 'You cannot end a sentence with because because because is a conjunction'
console.log(occurence.indexOf('because'));

// 18 lastIndexOf()
console.log(occurence.lastIndexOf('because'));

// 19 search() -> same as indexOf
console.log(occurence.search('because'));

// 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string
let stringWithTrailingWhitespace = ' 30 Days Of JavaScript '
console.log(stringWithTrailingWhitespace.trim());

// 21 startsWith() -> take a substring as argument and check if the mainstring startwith the substring return bool
console.log(challenge.startsWith("3")) // true

// 22 endsWith() -> inverse of startsWith
console.log(challenge.endsWith('JavaScript')); //true

/*
 23 match(substr) -> it takes a substring or regular expression pattern as an argument and it returns an array 
 if there is match if not it returns null
*/

console.log(challenge.match('a'));

// 24 concat(substr1, substr2, substr3) -> take many substring and join them
console.log(challenge.concat(". I'm already at day2"));

// 25 string.repeat(n) -> repeat a string n times
console.log(challenge.repeat(2));