
//Дан масив об'єктів. Вивести масив телефонних номерів користувачів, 
// у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]


    //main 
const array = [];
users.forEach((user) => {
    const phone = user.phone;
    const balance = user.balance.replace(/[^0-9]/,'').replace(/,/g, '');
    if(balance > 2000) {
        array.push(phone);
    }
});
console.log(array);


    //main
const reduce = users.reduce((acc, user) => {   //user пробегается по массиву как и в других циклах
    const balance = user.balance.replace(/[^0-9]/,'').replace(/,/g, '');
    if(balance > 2000) {
                              
        return acc + +balance   // пушить в массив есть смысл только если я хочу с ним сделать какие-то еще действия помимо сложения
    } 
  return acc; //второй ретурн нужен для выхода из цикла если не отвечает условию иф Я
}, 0);

console.log(`Well,  I eventually got: ${reduce}`)




    // same as reduce with using map
let sum = 0;
users.map((user) => {
    const balance = user.balance.replace(/[^0-9]/,'').replace(/,/g, '');
    if(balance > 2000) {
        return sum+=+balance;
    }
})

console.log(`Well, I eventually got: ${sum}`);



    // same as reduce with using filter+forEach
const filter = users.filter((user) => {
    const balance = user.balance.replace(/[^0-9]/,'').replace(/,/g, '');
    if(balance > 2000) {
        return true
    }
})

let sum1 = 0;
filter.forEach((user) => {
    const balance = user.balance.replace(/[^0-9]/,'').replace(/,/g, '');
    sum1 += +balance;
})

console.log(`Well, I eventually got: ${sum1}`)




// const girls = ['Alena', 'Malena', 'Milena', 'Asya', 'Kasya'];
// const filterValues = (name) => {
//     return girls.filter(data => {
//         return data.toLowerCase().indexOf(name.toLowerCase()) > -1;
//     });
// }
// console.log(filterValues('le'));