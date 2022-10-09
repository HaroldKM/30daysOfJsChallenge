const level3_users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '000000',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]

/* 
// 1 create object litteral
const personAccount = {
    firstName: 'Aug',
    lastName: 'da-COSTA',
    incomes: [
        { description: 'salary', income: 100000 },
        { description: 'etp1', income: 200000 },
        { description: 'etp2', income: 300000 },
    ],
    expenses: [
        { description: 'gardner', expense: 1000 },
        { description: 'cooker', expense: 2000 },
        { description: 'food', expense: 3500 },
    ],

    // global function for totalIncome and totalExpense
    total: function (propertySet, property) {
        let total = 0
        for (let i = 0; i < propertySet.length; i++) {
            total += propertySet[i][property]
        }
        return total;
    },

    addIncome: function(description, value){
        this.incomes.push({description:description, income: value})
    },

    addExpense: function(description, value){
        this.expenses.push({description:description, expense: value})
    },

    totalIncome: function() {
        return this.total(this.incomes, 'income')        
    }, 
    
    totalExpense: function() {
        return this.total(this.expenses, 'expense')        
    },

    accountInfo: function() {
        return {
            accountOwner: this.firstName,
            totalIncome : this.totalIncome(),
            totalExpense: this.totalExpense()
        }
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }

}

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome("etp3", 200000)
console.log(personAccount.incomes);
console.log(personAccount.totalIncome());
console.log(personAccount.accountBalance());
*/

// 2-a create a signup fonction 
//userId generator (took from d06 lvl2 q1)
const userId = () => {
    let numberOfCharact = 6
    const alphaNum = "abcdefghigklmnopqrstuvwxyz0123456789";
    const closeBornSize = alphaNum.length;
    let randomId = "";
    let randomNum = Math.floor(Math.random() * closeBornSize);

    for (let i = 0; i < numberOfCharact; i++) {
        // check if the value picked from the aplaNum already exist in the randomId (remember it has to be unique)
        while (randomId.includes(alphaNum[randomNum])) {
            randomNum = Math.floor(Math.random() * closeBornSize); //0-35
        }
        randomId += alphaNum[randomNum];
    }
    return randomId;
}

// showDateTime (took from d07 lvl2 q4)
const add0 = (elt) => { // we use this function to add 0 to number under 10 to have 2 digits eg: 09 or 06 insteat of 9 and 6 
    elt < 10 ? elt = `0${elt}` : elt
    return elt
}

const showDateTime = () => {
    const today = new Date();
    const date = add0(today.getDate()); // month day (1-31)
    const month = add0(today.getMonth() + 1); // month of the year (0-11)
    const year = add0(today.getFullYear());
    let hours = add0(today.getHours());
    let minutes = add0(today.getMinutes());

    return time = `${date}/${month}/${year} ${hours}:${minutes}`;
};

const signUp = () => {
    let username = prompt("Enter your username")
    let email = prompt("Enter your email")
    for (let i = 0; i < level3_users.length; i++) {
        if (level3_users[i]['email'] === email) return alert("it's seems that you have already an account")
    }
    let password = prompt("Enter your password")

    level3_users.push({
        _id: userId(),
        username: username,
        email: email,
        password: password,
        createdAt: showDateTime(),
        isLoggedIn: false
    })
}

// signUp()
// console.log(level3_users)

// 2-b create a signIn fonction 
const signIn = () => {
    let email = prompt("Enter your email")
    let password = prompt("Enter your password")
    for (let i = 0; i < level3_users.length; i++) {
        if (level3_users[i]['email'] === email && level3_users[i]['password'] === password ) {
            if(level3_users[i]['isLoggedIn'] != true){
                level3_users[i]['isLoggedIn'] = true
                return alert("congrat you are logged in")
            }else{
                return alert("you are already logged In try logged out")
            }
            
        }
        
    }
    return alert("you must check your credentials we can't find you")

}

// signIn()
// console.log(level3_users)

// 3-a rate the product 
const rateProduct = (user, product,rate) => { // product refer to the number of the product in the product array
    products[product]['ratings'].push({userId: user, rate: rate})    
}

// rateProduct('fg12cy', 2, 3.4)
// console.log(products);

// 3-b average rating of product
const averageRating = (product) => {
    let averageRating = 0
    const array = products[product]['ratings']
    if (array.length === 0) return alert("this product don't have any rating ")
    for(let i = 0; i < array.length; i++){
        averageRating += array[i]['rate'];
    }
    return averageRating/array.length
    
}

// console.log(averageRating(0));
// averageRating(0)


// 4 likeProduct
const likeProduct = (user, product) => {
    const array = products[product]['likes']
    if (array.length === 0){
        array.push(user)
        alert('your like have correctly been added')

    }else{
        array.pop()
        alert('your like have correctly been removed')
    }
    return array;
}

likeProduct('fg12cy', 1);
console.log(products);


