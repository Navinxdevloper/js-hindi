function sayMyname() {
    console.log("n");
    console.log("a");
    console.log("v");
    console.log("i");
    console.log("n");
}

//sayMyname()

function addNumber(a,b) {
    console.log(a+b);
}

//addNumber(3,4)

function addNumber(a,b) {
//    let result = a + b
//    return result
//return a+b
}

// const result  = addNumber(4,5)
// //console.log("result : ", result);
// function loginUsermessage(username){
// return`${username} just logged in`
// }

// console.log(loginUsermessage("navin"))


// function isLoggedin(username = "navin") {
//     if(!username){
//         console.log("Please enter valid username")
//         return
//     }
//     else{
//         return`${username} just logged in`
//     }
// }

//console.log(isLoggedin("navin"));
//console.log(isLoggedin());
//console.log(isLoggedin("vinit"));


function morenumber(...num){
    return num
}

//console.log(morenumber(200,400,500,600,700,800,900))

// const obj ={
//     username : "navin",
//     salary : 55000,
//     age : 21
// }

// function isloggedin(getuser){
//     console.log(`my name is ${getuser.username} and my age is ${getuser.age} and my salary is ${getuser.salary} `)
// }
// console.log(isloggedin(obj));


const newArray = [200,100,400,500,600]

function oldArray(getArray){
    return getArray[4]
}

console.log(oldArray(newArray))