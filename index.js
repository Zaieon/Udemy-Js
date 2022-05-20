// var fName = prompt('What is your First Name?')
// var lName = prompt('What is your Last Name?')
// var age = prompt('What is your Age?')
// alert('your name is ' + fName + ' ' + lName)
// alert('and you are ' + age + ' years old')


// var age = prompt('How old are you?')
// var tt = (age / 4)
// var ta = age * 365
// var daysLived = Math.floor(tt + ta)

// alert ("You've lived for " + daysLived + " days" )


// var guest = prompt('Please enter your age')

// if (guest < 18) {
//     alert('Please you can not enter')
// }
// else if (guest >= 18 && guest <= 21) {
//     alert('You can enter but you\'re not allowed to drink')
// }
// else {
//     alert('You can enter and help yourself with a drink')
// }


// var age = prompt('Please enter your age')
// Number(age)
// var aa = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
// var i;

// if (age < 0) {
//     console.error('This is impossible')
// }
// else if (age == 21) {
//     alert('Happy 21st birthday!')
// }
// else if ((age % 2) !== 0) {
//     alert('Your age is odd!')
// }
// else {
//     alert('Ooh la la!')
// }


// var guessNumber = 8
// var number = Number(prompt('Guess the number'))

// if (number > guessNumber) {
//     alert('Too high. Try again!')
// }
// else if (number < guessNumber) {
//     alert('Too low. Try again!')
// }

// else if (number === guessNumber) {
//     alert('You guessed correctly!')
// }


// var num = 5

// while (num < 50) {
//     if ((num % 5 === 0) && (num % 3 === 0))
//     {
//         console.log(num)
//         }
//     num++
    
// }



// var num = 0;

// while (num === 0) {
//     var pr = prompt('Are you there yet?')
//     if (pr === 'yeah' || pr === 'yes') {
//         alert("You've finally made it!")
//         break
//     }
// }

// var ans = prompt('Are we there yet?')

// while (ans.indexOf('yes') == -1) {
//     ans = prompt('Are we there yet?')
// }

// alert ('Yay, we are there!')


// for (var i = 5; i <= 50; i++) {
//     if (i % 5 === 0 && i % 3 === 0)
//     {
//         console.log(i)
//         }
// }


// var isEven = function (num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false
// }


// var fact = function (num) {
//     var fac = num
//     while (num >= 0) {
//         if (num === 0) {
//             return 1
//         }
//         else {
//             num--
//             fac *= num
//             if (num === 1) {
//                 return fac
//             }
//         }
        
        
//     }
// }


// var kebabToSnake = function (strr) {
//     return strr.replace(/-/g, '_')
   
// }


// let multiplier = x => y => x * y
// let doubler = multiplier(2)


// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }

// let comp = companies.forEach(company => { return console.log(company.start + 5) })
// console.log(comp)

// Filter

// let canDrink = ages.filter(x => x >= 21)
// console.log(canDrink)

// let canDrink = []

// for (let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink)

// let retailCompanies = companies.filter(x => x.end - x.start >= 10)
// console.log(retailCompanies)

// Map

// let squareTimes = (ages.map(x => x**2)).map(x=>x * 2)
// console.log(squareTimes)

// Sort

// let sortedList = companies.sort((a, b) => a.start-b.start)
// console.log(sortedList)
// const sortAges = ages.sort((a, b) => b > a ? 1 : -1);
// console.log(sortAges)

// Reduce
// let ago = [3, 4, 5, 4]
// const reduceAge = ages.reduce((x, y) => x + y, 5)
// console.log(reduceAge)

// let totalYears = companies.reduce((total, comp) => total + (comp.end - comp.start), 0)
// console.log(totalYears)

// const combined = ages.map(x => x * 2).filter(x => x >= 40).sort((a, b) => a-b).reduce((total, age) => total + age, 0)
// console.log(combined)



// JavaScript Arrays
// let todos = []
// let input = prompt('What would you like to do?')
// while (input !== 'quit')
// {
//     if (input === 'new') {
//         let tobo = prompt('Add new activity')
//         todos.push(tobo)
//         console.log(tobo + ' added to the list')
//     }
//     else if (input === 'list') {
//         console.log('**********')
//         todos.forEach((todo, i) =>
//             console.log( i + ':  ' + todo))
//         console.log('**********')
//     }
//     else if (input === 'delete') {
//         let del = Number(prompt('Enter index to delete'))
//         let deleted = todos.splice(del, 1)
//         console.log(deleted + ' was deleted')
//     }
//     input = prompt('What would you like to do?')
    
// }
//     console.log('You quit')


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//         console.log(numbers[i])
//     }
// }


// let num = [1, 2, 3, 4, 5]

// function printReverse(arr) {
//     for (var i = arr.length -1; i >= 0; i--) {
//         console.log(arr[i])
//     }
//     // arr.foreach(x => console.log())
// }


// let count = 0
// let nuu = ['a', 'b', 'p']
// function isUniform(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]) {
//             count += 1
//         }
//     }
//     if (count === (arr.length - 1))
//     {
//         console.log('true')
//     }
//     else {
//         console.log('false')
//     }
// }

// let total = 0
// let num = [1, 2, 3]
// let sumArray = function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }


// let ar = [1, 2, 3]

// function maxValue(arr) {
//     let maxx = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > maxx) {
//            maxx = arr[i]
//        }
//     }
//     console.log(maxx)
// }


// let someObject = {
//     friends: [
//         { name: 'Malfoy' },
//         { name: 'Crabbe' },
//         { name: 'Goyle' }
//     ],
//     color: 'baby blue',
//     isEvil: true
// };


// let movie = [
//     {
//         title: 'Game of Thrones',
//         rating: 5.0,
//         hasWatched: true,
//     },
//     {
//         title: 'Frozen',
//         rating: 4.5,
//         hasWatched: false,
//     },
//     {
//         title: 'Prison Break',
//         rating: 5.0,
//         hasWatched: true,
//     },
//     {
//         title: 'Final Destination',
//         rating: 5.0,
//         hasWatched: false,
//     }
    
// ]

// movie.forEach(function (mov) {
//     if (mov.hasWatched === true) {
//         console.log('You have seen ' + mov.title + ' - ' + mov.rating + ' stars');
//     }
//     else {
//         console.log('You have not seen ' + mov.title + ' - ' + mov.rating + ' stars');
//     }
// })


let body = document.querySelector('body')
let h1 = document.querySelector('h1')

let isRed = false
setInterval(function () { 
    if (isRed) {
        body.style.backgroundColor = 'white'
        h1.style.color = 'red'
    }
    else {
        body.style.backgroundColor = 'red'
        h1.style.color = 'white' 
    }
        isRed = !isRed
},1000)






