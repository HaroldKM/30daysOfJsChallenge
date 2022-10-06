/*
// 1 iterate 0 to 10
// for loop 
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}


// do while
let i = 0;
do{
    console.log(i);
    i++
}while(i <= 10)



// 2 iterate from 10 to 0
// for loop
for(i=10; i>=0; i--){
    console.log(i);
}


// while loop
let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}


// do while loop
let i = 10
do{
    console.log(i);
    i--;
}while(i >= 0)



// 3 iterate 0 to n
const n = parseInt(prompt('Enter n'))
console.log(typeof n);
for(let i=0; i<=n; i++ ){
    console.log(i);
}



// 4 loop for patern
const n = parseInt(prompt('Enter n')) // convert to Int as prompt always gives us string
const pattern = '#'
// console.log(typeof n);
for(let i=1; i<=n; i++ ){
    console.log(`${pattern.repeat(i)}\n`);
}

// 5 print the pattern 
for(let i=0; i<=10; i++){
    console.log(`${i} * ${i} = ${i*i} \n`);
}

// 6 print the following pattern
for(let i=0; i<=10; i++){
    console.log(`${i}\t${i**2}\t${i**3}\n`);
}



// 7 iterate from 0 to 100 and print even number 
const even = []
for(let i=0; i<=100; i++){
   if(i%2 === 0) even.push(i)
}

console.log(even);


// 8 iterate from 0 to 100 and print odd number 
const odd = []
for(let i=0; i<=100; i++){
   if(i%2 !== 0) odd.push(i)
}

console.log(odd);


// 9 print only prime number between 0-100
// just remember that a prime number mathematically talking can be divided only by 1 and itself
const prime = [];

for (let i = 1; i <= 100; i++) {
  let flag = 0; // if the flag is >1 then the number has been divided by itself and a number !=1 (because the loop start at 2)
  for (let j = 2; j <= 100; j++) {
    if (i % j === 0) flag++;
  }
  if (flag === 1) prime.push(i);
}

console.log(prime);


// 10 sum of  number from 0-100
let sum = 0
for(let i=0; i<=100; i++){
    sum+=i
}

console.log(`the sum of number from [0-100] is ${sum}`);


// 11 sum of all even and sum of odd
let sumOdd = 0
let sumEven = 0
for(let i=0; i<=100; i++){
    i%2 === 0 ? sumEven+=i : sumOdd+=i
}
const sumArray = [sumEven, sumOdd]
console.log(`sumOdd = ${sumOdd} | sumEven = ${sumEven}`);



// 12 print sumOdd and sumEven as array
console.log(sumArray);


// 13-14 a small script which generate array of 5 random unique number
const randomArray = []
const closeBorn = 10
let randomNum = Math.floor(Math.random() * closeBorn)
for(let i=0; i<5; i++){
    while(randomArray.includes(randomNum)){
        randomNum = Math.floor(Math.random() * closeBorn)
    }
    randomArray.push(randomNum)
}

console.log(randomArray);


// 15 six characts unique random id
const alphaNum = "abcdefghigklmnopqrstuvwxyz0123456789";
const closeBornSize = alphaNum.length;
console.log(closeBornSize);
let randomId = "";
let randomNum = Math.floor(Math.random() * closeBornSize);

for (let i = 0; i < 6; i++) {
  // check if the value picked from the aplaNum already exist in the randomId (remember it has to be unique)
  while (randomId.includes(alphaNum[randomNum])) {
    randomNum = Math.floor(Math.random() * closeBornSize); //0-35
  }
  randomId += alphaNum[randomNum];
}

console.log(randomId);
*/
