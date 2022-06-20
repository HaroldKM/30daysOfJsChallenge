// 1 
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2 
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

// 3 casting -->  str to int 
let str10 = '10'
console.log(`${str10 === 10}`)
let int10 = +'10'
console.log(`${int10 === 10}`);

// 4 casting and rounding up 
let float10 = parseFloat("9.8")
console.log(`${float10 == 10}`);
let roundedFloat10 = Math.ceil(float10)
console.log(`${roundedFloat10 == 10}`);

// 5 string included includes()
let python = 'python'
let jargon = 'jargon'
console.log(`python: ${python.includes('on')} \njargon: ${jargon.includes('on')}`);

// 6 string included
let sentence = "I hope this course is not full of jargon."
console.log(`${sentence.includes('jargon')}`);

// 7 generate randomNum [0-100]
let randomNumLevel2 = Math.floor(Math.random() * 101)
console.log(randomNumLevel2);

// 8 generate randomNum [50-100] -> Math.floor(Math.random() *(max-min) + min )
let randomNumLevel2_8 = Math.floor(Math.random() * 50 + 50) 
console.log(randomNumLevel2_8);

// 9 generate randomNum [0-255]
let randomNumLevel2_9 = Math.floor(Math.random() * 255) 
console.log(randomNumLevel2_9);

// 10 generate randomNum
const js = "JavaScript"
const jsLength = js.length
console.log(jsLength)
// create a range btw 0 and jsLength to generate random num to accses js strrings
let randomstr = Math.floor(Math.random() * jsLength)
console.log(randomstr);
console.log(js[randomstr])

// 11 character escaping
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")


// 12 sting slicing
let str12 = "You cannot end a sentence with because because because is a conjunction"
let firstOccurence = str12.indexOf("because")
let lastOccurence = str12.lastIndexOf("e")
console.log(str12.substring(firstOccurence, lastOccurence+1))