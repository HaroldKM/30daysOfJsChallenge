let usersKey = Object.keys(users)
/*
// 1 find the person wh has the highest skills in the users object
let usersKey = Object.keys(users)
let higherSkills = 0
let user = {}
for(let i = 0; i < usersKey.length; i++){
    let skillsLenght = users[usersKey[i]]['skills'].length
    // higherSkills = users[usersKey[i]]['skills']
    if (skillsLenght > higherSkills){
        higherSkills = skillsLenght
        user = users[usersKey[i]]
    }
}
console.log(user);


// 2 Count logged in users
let loggedCount = 0
for(let i = 0; i < usersKey.length; i++){
   if(users[usersKey[i]]['isLoggedIn']) loggedCount++
}
console.log(loggedCount);

// 2 count users having greater than equal to 50 points 
let userOver50 = 0
for(let i = 0; i < usersKey.length; i++){
    if(users[usersKey[i]]['points'] >= 50) userOver50++
 }
 console.log(userOver50);


// 3 Find people who are MERN stack developer from the users object
const mernDev = []
for(let i = 0; i < usersKey.length; i++){
    let skills = users[usersKey[i]]['skills']
   if(skills.includes('MongoDB') && skills.includes('Express') && 
        skills.includes('React') && skills.includes('Node')) mernDev.push(users[usersKey[i]])
}

console.log(mernDev);


// 4 Set your name in the users object without modifying the original users object
const newObj = Object.assign({}, users);
newObj['Aug'] = {
    name: 'Aug'
};
console.log(newObj);
console.log(users);


// 5 Get all keys or properties of users object
const entries = Object.entries(users)
console.log(entries);


// 6 Get all the values of users object
const values = Object.values(users)
console.log(values); 
*/