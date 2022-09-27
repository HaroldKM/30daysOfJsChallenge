/*
// 1 function to print fullname
const fullName = (name) => console.log(name);
fullName('Aug')


// 14
const spring = ['march', 'april', 'may']
const summer = ['june', 'july', 'august']
const automn = ['september', 'october',"november"]
const winter = ['december', 'january']

const checkSeason = (month) => {
    month = month.toLowerCase()
    if(spring.includes(month)){
        console.log('its spring time');
    }else if(summer.includes(month)){
        console.log('its summer time');
    }else if(automn.includes(month)){
        console.log('its automn time');
    }else{
        console.log('it\'s winter time');
    }
}

checkSeason('august')

// 15 findMax
const findMax = (...args) =>{
    let higherNumber = 0
    for(argument of args){
        if(argument >= higherNumber) higherNumber = argument
    }
    return higherNumber
}

console.log(findMax(12, 52, -1));

*/