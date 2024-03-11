// singleton


//object literals

//Object.create

const mysym =Symbol("rajnath")
const jsUser = {
    name : "navin",
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
// Object.freeze(jsUser)
// jsUser.email = "navin@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    //console.log("hello js user");
}
jsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting2());