const tinder = new Object() //singleton
const tinderuser = {} //nonsingleton

tinderuser.id = "123abc"
tinderuser.name = "navin"
tinderuser.isLoggedin = false
//console.log(tinderuser)

const regulauser = {
    email : "abc@gmail.com",
    fullname : {
        username :{
            firstname :"navin",
        }
    }
}

//console.log(regulauser.fullname.username.firstname);

const obj1 ={
1:"a",
2:"b"
}
const obj2 ={
3:"c",
4:"d"
}

const obj = {...obj1, ...obj2}
//console.log(obj);


console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("name"));