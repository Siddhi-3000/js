const accountID = 3000
let emailID = "siddhi@123"
var accountPASS = 1234
let customerSTATE = null

// accountID = 2000
emailID = 33
accountPASS = 4567

// console.table([accountID,accountPASS,emailID])
// console.log(typeof emailID)
let numberID = String(emailID)
// console.log(typeof numberID)
// console.log(numberID)

let str1 = "hello"
let str2 = " hitesh"
// console.log(str1 + str2)

// console.log(1 + "2" + 3)

let x1=3
const y1=x1++
// console.log(x1,y1)
let x2=3
const y2=++x2
// console.log(x2,y2)

let score = Array[1,3,4]
// console.log(typeof(score))

let userOne ={
    email:"siddhi@123",
    pass:1234,  
}

let userTwo = userOne

userTwo.email="advait@123"

// console.log(userOne);

let name = "siddhi"
let number = 30
// console.log(`hi my name is ${name}`)

const numberValue = ("  siddhi-uit-hii  ")
// console.log(typeof(numberValue))
// console.log(numberValue[0])

const gameValue = numberValue.substring(-1,-3)
// console.log(gameValue)

// console.log(numberValue.split("-"))
// console.log(name.toUpperCase())
// console.log(numberValue.replaceAll("i","%"))
// console.log(numberValue.trim())
// console.log(numberValue.c("hello"))
// console.log(name.search(i))

// const balance = new Number(100)
// console.log(balance);

// const num = 133466945.7497504
// console.log(num.toExponential(2))

// const num = 123.49768
// console.log(num.toFixed(3))

// const num = 123.49768
// console.log(num.toPrecision(4))

// const num = 100000000000.9
// console.log(num.toLocaleString('en-IN'))


// console.log(Math.random())
// console.log(Math.floor(Math.random()*10)+1)

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random()* (max - min + 1))+ min)

// let MyDate = new Date()
// console.log(MyDate)
// console.log(MyDate.toString())
// console.log(MyDate.toDateString())
// console.log(MyDate.toISOString())
// console.log(MyDate.toJSON())
// console.log(MyDate.toLocaleDateString())

let MyCreatedDate = new Date("03-31-2007")
// console.log(MyCreatedDate.toLocaleDateString())

let mytimeswamp = Date.now
// console.log(mytimeswamp())
// console.log(MyCreatedDate.getTime())
let newdate = new Date()
// console.log(newdate.toLocaleString('defalt',{
//     weekday: "short"
// }))

const myARR = new Array(1,3,6,5,7,3)
// console.log(myARR[3])

// myARR.push(0,3)
// myARR.pop()
// myARR.pop()

myARR.unshift(1)
// console.log(myARR) //type-object

const newARR = myARR.join()
// console.log(newARR) // type-string (because of join)

marvel_heros = ["thor", "ironman", "spidy"]
dc_heros = ["flash","shaktiman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

another_array = marvel_heros.concat(dc_heros)
// console.log(another_array)
 another_realarray = [...marvel_heros,...dc_heros]
//  console.log(another_realarray)

just_array = [1,2,3,[4,5],[6,7,8,[9,10]]]
// console.log(just_array.flat(Infinity))

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3))

 mySym = Symbol("key1")

const user = {
    name: "siddhi",
    email: "siddhi@gg.com"
    // [mySym]: "mykey1"
}
user.greeting = function(){
    // console.log("hello js user")
}
user.greetingtwo = function(){
    // console.log(`hello js user`${user.name})
}

// console.log(user.greeting())

function one() {
    const username = "siddhi"
    console.log(username)
    function two() {
        const website = "youtube"
        
    two()
    console.log(username)
}}
// one()
console.log(addone(5))

function addone(num){
    return 1+num
}

console.log(addtwo(6))
const addtwo = function(num){
    return 2+num
}