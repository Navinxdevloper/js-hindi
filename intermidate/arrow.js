// const user = {
//     username : "navin",
//     price : 999,

//     welcomemessage : function(){
//         console.log(`${this.username}, welcome to website`);	
//         //console.log(this)  //this is used to refers the current object // //yaha par this function run hoga
//     }


// }

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this); yaha par nhi hua kunki ye global ko refes kar raha hai or abhi sab  block scope hai isliye



// function chai(){
//     let username = "navin"
//     console.log(this.username); //yaha par bhi run nhi hoga kunki this is baar functtion ke andar hai isliye
// }

// chai()


// const chai = function () {
//     let username = "navin"
//       console.log(this.username); //iss tarah bhi nhi hota hai this function 
// }
// const chai =  ()=> {
//     let username = "navin"
//       console.log(this)
// }

// chai()  arrow function me this function call nhi hota hai


// const addnum = (num1, num2) =>{  //normal arrow function 
//     return num1+num2
// }



//const addnum = (num1, num2) => num1+num2  //easy arrow function
//const addnum = (num1, num2) => (num1+num2)  // or easy arrow function
//const addnum = (num1, num2) => ({username:"navin"})  //object declareation with arrow fuction
//console.log(addnum(3,4));
