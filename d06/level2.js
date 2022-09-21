/*
// 1 generate any number of character
let numberOfCharact = parseInt(prompt('Enter number of charact'))
const alphaNum = "abcdefghigklmnopqrstuvwxyz0123456789";
const closeBornSize = alphaNum.length;
console.log(closeBornSize);
let randomId = "";
let randomNum = Math.floor(Math.random() * closeBornSize);

for (let i = 0; i < numberOfCharact; i++) {
  // check if the value picked from the aplaNum already exist in the randomId (remember it has to be unique)
  while (randomId.includes(alphaNum[randomNum])) {
    randomNum = Math.floor(Math.random() * closeBornSize); //0-35
  }
  randomId += alphaNum[randomNum];
}

console.log(randomId);


// 2 random hexadecimal number
let hex = "0123456789abcdef";
const closeBornSize = hex.length;
console.log(closeBornSize);
let randomHex = "#";

for (let i = 0; i < 6; i++) {
  let randomNum = Math.floor(Math.random() * closeBornSize);
  randomHex += hex[randomNum];
}

console.log(randomHex);


// 3 random rgb number

let rgb = [];
let randomNum = ''
let closeBorn = 255; // rgb color number start from 0 to 255
for (let i = 0; i < 3; i++) {
  randomNum = Math.floor(Math.random() * closeBorn + 1); // +1 to include the final number [0-255] insteat of [0-255[
  rgb.push(randomNum)
}
console.log(rgb);
console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);


// 4 UPPERCASE COUNTRIES
let upperCaseCountries = countries.map((x => x.toUpperCase()))
console.log(upperCaseCountries);


// 5  create an array for countries length'.
let arrayEltLength = countries.map((x => x.length))
console.log(arrayEltLength);


// 6
let arrayOfArray = countries.map(
    (x) => [x, x.substring(0,4).toUpperCase(), x.length]
)
console.log(arrayOfArray);


// 7 land countries
const landCountries = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land'))  landCountries.push(countries[i])
}
console.log(landCountries);



// 8 ia countries
const aiCountries = []
for(let i=0; i<countries.length; i++){
    if(countries[i].endsWith('ia'))  aiCountries.push(countries[i])
}
console.log(aiCountries);



// 9 biggest countries in array
let bigestCountrySize = 0;
let bigestCountry = "";
for (const country of countries) {
  if (country.length > bigestCountrySize) {
    bigestCountrySize = country.length;
    bigestCountry = country;
  }
}
console.log(bigestCountry);


// 10 countries with 5 characters

let fiveCharactCountries = [];
for (const country of countries) {
  if (country.length === 5) fiveCharactCountries.push(country)
}

console.log(fiveCharactCountries);


// 11 longest word
let bigestCountrySize = 0;
let bigestCountry = "";
for (const web_tech of webTechs) {
  if (web_tech.length > bigestCountrySize) {
    bigestCountrySize = web_tech.length;
    bigestCountry = web_tech;
  }
}
console.log(bigestCountry);


// 12 create array of array 
const webTechArrayOfArray = webTechs.map((x)=>[x, x.length])
console.log(webTechArrayOfArray);



// 13 MERN Stack
let mern = "";
for (elt of mernStack) {
  mern += elt[0];
}

console.log(mern);


// 14 array looping
const skillsArray=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(skill of skillsArray){
    console.log(skill);
}

const fruitArray = ['banana', 'orange', 'mango', 'lemon'] 
for(let i=fruitArray.length-1; i>=0; i--){
    console.log(fruitArray[i]);
}


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(let i=0;i<fullStack.length;i++){
    for(let j=0; j<fullStack[i].length; j++){
        console.log(fullStack[i][j]);
    }
  }

  */