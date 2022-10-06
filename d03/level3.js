// 1 human redable date format

let humanDate = new Date()
let year = humanDate.getFullYear()
let month = humanDate.getMonth() + 1 // month in js [0-11]
let day = humanDate.getDate() 

let hours = humanDate.getHours() < 10
? "0" + humanDate.getHours()
: humanDate.getHours()

let minute = humanDate.getMinutes() < 10
? "0" + humanDate.getMinutes()
: humanDate.getMinutes()
console.log(`${year}-${month}-${day} ${hours}:${minute}`)
