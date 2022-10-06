// 1 operation on array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
let size = ages.length
let min =  ages[0]
let max = ages[ages.length - 1]
let middle = ages[ages.length / 2]
// average age is sum of all age values / number of age 
// i just prefer do it with loop so see you on the loop side
let rangeOfAge = Math.abs(max - min)
let maxMinusAverageAge = Math.abs(max - middle)
rangeOfAge > maxMinusAverageAge
? console.log("range > maxMinusAverageAge")
: console.log("range < minMinusAverageAge")

// slice first 10 elements from countries
let first10Elements =  countries.slice(0, 10)
console.log(first10Elements);
console.log("min - max - middle - range: " + min, max, middle, rangeOfAge)


// 2 the middle countries in the countries array 
let countrySize = countries.length
let middleCountry = Math.floor(countrySize / 2) 
console.log(countries[middleCountry])


// 3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countrySize % 2 === 0
? console.log(countries.slice(0, countrySize / 2 + 1), countries.slice(countrySize / 2, countrySize))
:console.log(countries.slice(0, middleCountry + 1), countries.slice(middleCountry, countrySize));