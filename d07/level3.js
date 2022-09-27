/*
// 1  copy array (remeber shallow copy and deep copy)
const newCountries = [...countries]
console.log(newCountries);


// 2 copy of country which are not modifiable
const sortedCountries = [...countries].sort()
console.log(sortedCountries, countries)

// 3 sort mern and webTechs array
console.log(mernStack.sort(), webTechs.sort());

// 4 extract country containing land
const landCountries = countries.filter(x=> x.includes('land'))
console.log(landCountries);



// 5 highest number of char
let highestSize = 0
let highestCountry = ''
for(country of countries){
    if(country.length > highestSize) {
        highestSize = country.length
        highestCountry = country
    }
}

console.log(highestCountry);


// 6-7 array with only for charact
const fourCharactCountries = countries.filter(x=> x.length === 4)
console.log(fourCharactCountries);


// 8-9 reverse array
const reversoCountry = countries.map((x => x.toUpperCase())).reverse()
console.log(reversoCountry);
*/

