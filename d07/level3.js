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
*/


// 5 convertHexaToRgb // parseInt(base 10)
const splitHex = (hex) => {
  const regex = /[a-zA-Z0-9]{2,2}/g
  const hexSplited =  hex.match(regex)
  return hexSplited

} 
const convertHexaToRgb = (hex) => {
  const arrayHexaToRgb = splitHex(hex);
  for(let i = 0; i < arrayHexaToRgb.length; i++){
    arrayHexaToRgb[i] = parseInt(arrayHexaToRgb[i] ,16)
  }

 
  console.log(`rgb(${arrayHexaToRgb[0]},${arrayHexaToRgb[1]},${arrayHexaToRgb[2]})`);
}

convertHexaToRgb('#12ab3d')


// 6 convertRgbToHexa // number.toString(base16)
