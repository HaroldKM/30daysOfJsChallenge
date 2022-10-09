/*
// 1 userIdGeneratedByUser
const userIdGeneratedByUser = () => {
  let numberOfCharact = parseInt(prompt("Enter number of charact"));
  let numberOfId = +prompt("Enter number of id to be generated");
  const idArray = [];
  const alphaNum = "abcdefghigklmnopqrstuvwxyz0123456789@-ç&éABCDEFGHIGKLMNOPQRSTUVWXYZ";
  const closeBornSize = alphaNum.length;
  // console.log(closeBornSize);
  let randomId = "";
  let randomNum = 0;

  while (numberOfId > 0) {
    for (let i = 0; i < numberOfCharact; i++) {
      randomNum = Math.floor(Math.random() * closeBornSize); //0-35
      randomId += alphaNum[randomNum];
    }
    idArray.push(randomId);
    randomId = "";
    numberOfId--;
  }

  return idArray;
};

console.log(userIdGeneratedByUser());



// 2 rgb generator
const rgbColorGenerator = () => {
  let rgb = [];
  let randomNum = "";
  let closeBorn = 255; // rgb color number start from 0 to 255
  for (let i = 0; i < 3; i++) {
    randomNum = Math.floor(Math.random() * closeBorn + 1); // +1 to include the final number [0-255] insteat of [0-255[
    rgb.push(randomNum);
  }
  console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}

rgbColorGenerator()

// 3 and 4 are 🔽
// 5 convertHexaToRgb 
// separation of concern (one function is intend to do only one thing)
const splitHex = (hex) => { //split the hexadecimal number into array.
  const regex = /[a-zA-Z0-9]{2,2}/g
  const hexSplited =  hex.match(regex)
  return hexSplited
} 

const convertHexaToRgb = (hex) => {
  const arrayHexaToRgb = splitHex(hex);// call of splitHex
  for(let i = 0; i < arrayHexaToRgb.length; i++){
    // here we are basically saying i want to convert my element from base 16 to base 10
    arrayHexaToRgb[i] = parseInt(arrayHexaToRgb[i] ,16)
  }
  console.log(`rgb(${arrayHexaToRgb[0]},${arrayHexaToRgb[1]},${arrayHexaToRgb[2]})`);
}

convertHexaToRgb('#12ab3d')


// 6 convertRgbToHexa // number.toString(base16)
const splitRgb = (rgb) =>{
  const regex = /[0-9]{1,3}/g
  const rgbSplited = rgb.match(regex)
  return rgbSplited;
}

// console.log(splitRgb('rgb(182,5,1)'));


const convertRgbToHexa = (rgb) => {
  const arrayRgbToHex = splitRgb(rgb);
  for(let i = 0; i < arrayRgbToHex.length; i++){
    arrayRgbToHex[i] = +arrayRgbToHex[i] //convert array of string to number to use Number.toString(16)
    arrayRgbToHex[i] = arrayRgbToHex[i].toString(16)
  }
  return `#${arrayRgbToHex[0]}${arrayRgbToHex[1]}${arrayRgbToHex[2]}`;
}

console.log(convertRgbToHexa('rgb(182,55,123)'));


// 7 generateColors

// 3 arrayOfHexaColor
const arrayOfHexaColor = () => {
  let hex = "0123456789abcdef";
  const closeBornSize = hex.length;
  let randomHex = "#";

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * closeBornSize);
    randomHex += hex[randomNum];
  }

  return randomHex;
};
// console.log(arrayOfHexaColor());

// 4 arrayOfRgbColor
const arrayOfRgbColor = () => {
  let rgb = [];
  let randomNum = "";
  let closeBorn = 255; // rgb color number start from 0 to 255
  for (let i = 0; i < 3; i++) {
    randomNum = Math.floor(Math.random() * closeBorn + 1); // +1 to include the final number [0-255] insteat of [0-255[
    rgb.push(randomNum);
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

// console.log(arrayOfRgbColor());

const generateColors = (colorModel, numberOfColor) => {
  // this function is intend to return an array of the specified number of rgb or hexa color
  const arrayOfColors = (numberOfColor, callback) => {
    const arrayOfColor = [];
    for (let i = 0; i < numberOfColor; i++) {
      // we use a callback here because we already have function to call to generate color
      arrayOfColor.push(callback());
    }
    return arrayOfColor;
  };

  if (colorModel === "hexa" && numberOfColor === 1) return arrayOfHexaColor();
  if (colorModel === "rgb" && numberOfColor === 1) return arrayOfRgbColor();

  if (numberOfColor > 1) {
    if (colorModel === "hexa")
      return arrayOfColors(numberOfColor, arrayOfHexaColor);

    if (colorModel === "rgb")
      return arrayOfColors(numberOfColor, arrayOfRgbColor);
  }
};
console.time('color'); // just to know how many time our process take to run
console.log(generateColors("rgb", 1));
console.log(generateColors("hexa", 1));
console.log(generateColors("hexa", 100));
console.log(generateColors("rgb", 100));
console.timeEnd("color");


// 16 check if items in the array are unique
const uniqueItems = (array) => {
  let itemsCounter = 0
  let actualValue = 0
  for(let i = 0; i < array.length; i++) { 
    for(let j = 1; j<= array.length; j++){
      actualValue = array[i];
      if(array[j] === actualValue) itemsCounter++
      if(itemsCounter >= 2) return false
    }
    itemsCounter = 0
  }
  return true
}

const uniqueArray = [1,2,3,4,5,6,7,8,9,10]
const notUniqueArray = [1,2,3,5,6,7,1,8,6]
console.log(uniqueItems(notUniqueArray));


// 18 isValidVariable
const isValidVariable = (variable) => {
  const specialCharact = variable.match(/[^a-zA-Z0-9$_]/g);
  const returnVal = specialCharact === null ? true : false;
  return returnVal
};
const validVariable = 'hello_How_are_You$'
const inValidVariable = "&é(-è_herçosà@)=)kiol"
console.log(isValidVariable(validVariable));
*/