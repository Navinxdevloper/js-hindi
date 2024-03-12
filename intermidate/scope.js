// scope 

// there are two typpes of scope

// 1) block scope = {} age value ya loop  , function , ya conditional statment jab tak { } iske ander hai wo block scope hoga 
// isme hum let var or const ka bhi use kar sakte hai par var hamara global scope hoga or ham agar let or const ko iske andar declare 
// kar rahe hai toh hame console.log bhi iske { } andar karwana hoga par var ko hum kahi bhi print  karwa sakte hai isliye var ka use nhi
// karna chahiye


// 2) global scope = agar ham value ya koi bhi statment iske {} bahar declare kar rahe hai toh wo global scope mana jayega isme agar ham letor const bhi iske bahar declare kar rahe hai 
// toh iske {} bahar bhi print karwa sakte hai

// function one() {
//     username = "navin" 
//     function two(){
// password = "navin@1234"
// console.log(username);
//     }
//     console.log(password);
//     two()
// }
// one()  // bachhe jo hote hai bado se lolipop maang lete hai par bade jo hote hai bachho se lolipop nhi maang paate  jaise ki isme one jo hai wo bada hai or two jo hai wo bachha hai isliye two jo hai one ke value ko print karwa pa raha hai or one two ke value ko print nhi karwa paa raha or isme hum one me two ko call kar paa rahe hai par isme one ko call nhi kiya hua hai


// if(true){
//     username = "navin"
//     if(username ===  navin){
//         password = "navin@1234"
//         console.log(username + password);
//     }
//     console.log(password);
// }

// console.log(username); wahi same concept hai par loop me toh jyada dimag mat laga


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

                                             //hoistinng//

// addone(5)
// function addone(num){
//     return num+1
// }  // ye print ho jayega qki yeh normal function hai toh jayada dimag mat laga isme chahe tu function ko upar call kar ya nichhe matlab ek hi hai



//number(5)
// const number =function  addtwo(num){
//     return num+2
// } isme dimag laga qki number joo hai woh ek variable hai isliye tu agar usko fuction ke aphle call karega toh wo tujhe error dega