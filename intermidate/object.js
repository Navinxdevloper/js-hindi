// singleton  //object.create jo constructor  ke andar object banta hai use singleton bolte hai


//object literals

//Object.create

const mysym =Symbol("rajnath")
const jsUser = {                           //ye key or value ke pair me hota hai
    name : "navin",                    //name object me string ke tarah liya jata hai isliye log ke time bhi "" ye dena padega
    age : 21,
    "full name" : "navin vishwakarma",
    [mysym] : "rajnath",
    location : "mumbai",
    email : "navin@gmail.com",
    isLoggedin : false,
    lastlogindays : ["monday"]
}

// console.log(jsUser.email);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log( typeof jsUser[mysym]); //important for interview agaar yaad nhi hai toh object wala pahla video jakar dekh chai aur code ka

// jsUser.email = "navin@yahoo.com"
// Object.freeze(jsUser)  // freeze use karne ke badd value change nhi hoga
// jsUser.email = "navin@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    //console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting2());