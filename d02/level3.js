// 1 counting number in string
/*
    Here we used match combine with regular expression
    to count the number of love in the string
    we could not use "Love" because match is case sensitive
*/
const str1 =  "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log((str1.match(/love/gi)).length);

// 2 counting number in string
const str2 = "You cannot end a sentence with because because because is a conjunction"
console.log(str2.match(/because/gi).length)

// 3 extracting number from string (still remain the most frequent wordc)
let regEx = /[^a-zA-Z0-9., ]/g // take everything that is not (^) alphanumeric and global
const str4 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// let valueToClean = str4.match(regEx)
// console.log(valueToClean);
const str5 = str4.replace(regEx, '')
console.log(str5);


// 4 extracting number from string
let str6 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let regEx1 = /\d+/gi
let incomeResult = str6.match(regEx1)
console.log(parseInt(incomeResult[0]) + parseInt(incomeResult[1]) + parseInt(incomeResult[2]) );