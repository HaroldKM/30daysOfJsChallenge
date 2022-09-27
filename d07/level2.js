/*
// 3 printArray

const printArray = (arr) => {
  for(elt of arr){
    console.log(elt);
  }
}

printArray(countries)

// 4 showDateTime
const add0 = (elt) =>{ // we use this function to add 0 to number under 10 to have 2 digits eg: 09 or 06 insteat of 9 and 6 
  elt < 10 ? elt=`0${elt}` : elt
  return elt
}

const showDateTime = () => {
  const today = new Date();b
  const date = add0(today.getDate()); // month day (1-31)
  const month = add0(today.getMonth() + 1); // month of the year (0-11)
  const year = add0(today.getFullYear());
  let hours = add0(today.getHours());
  let minutes = add0(today.getMinutes());
 
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
};

showDateTime();


// 15 randomUserIp (recall that userIp is a set of 4 digits [0-255] separeted by a dot (.))
const randomUserIp = () =>{
  const arr = []
  for(let i = 0; i < 4; i++){
    arr.push(Math.floor(Math.random()*256));
  }
  console.log(`${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`);
}

randomUserIp()

// 16 practically the same as 15 


// 17 randomHexaNumberGenerator
const randomHexaNumberGenerator = () => {
  let hex = "0123456789abcdef";
  const closeBornSize = hex.length;
  let randomHex = "#";

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * closeBornSize);
    randomHex += hex[randomNum];
  }
  return randomHex;
};

console.log(randomHexaNumberGenerator());
*/

// 18 userIdGenerator
const userIdGenerator = () => {
  let numberOfCharact = parseInt(prompt("Enter number of charact"));
  const alphaNum = "abcdefghigklmnopqrstuvwxyz0123456789";
  const closeBornSize = alphaNum.length;
  console.log(closeBornSize);
  let randomId = "";
  let randomNum = Math.floor(Math.random() * closeBornSize);

  for (let i = 0; i < numberOfCharact; i++) {
    randomNum = Math.floor(Math.random() * closeBornSize); //0-35
    randomId += alphaNum[randomNum];
  }
  return randomId;
};

console.log(userIdGenerator());
