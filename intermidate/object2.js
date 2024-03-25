const tinder = new Object() //singleton
const tinderuser = {} //nonsingleton

tinderuser.id = "123abc"
tinderuser.name = "navin"
tinderuser.isLoggedin = false
//console.log(tinderuser)

const regulauser = { //nested object 
    email : "abc@gmail.com",
    fullname : {
        username :{
            firstname :"navin",
        }
    }
}

//console.log(regulauser.fullname?.username.firstname);   ? it is used to check the value is available or not

const obj1 ={
1:"a",
2:"b"
}
const obj2 ={
3:"c",
4:"d"
}

const obj = {...obj1, ...obj2}  //spread operator use ho raha hai
//console.log(obj);


// console.log(Object.keys(tinderuser));  //ye sari keys dega

// console.log(Object.values(tinderuser));  //ye sari value dega

// console.log(Object.entries(tinderuser));  //ye keys or values saath me dega

// console.log(tinderuser.hasOwnProperty("name"));  //hasownproperty check karega ki tinderuser me koi name naam ka property hai ki nhi ye important hai interview ke liye


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

course.courseInstructor


const {courseInstructor : sir}  = course  //destructure

console.log(sir)