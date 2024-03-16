function multiplybyfive(num){
return num*5
}

multiplybyfive.power = 2

console.log(multiplybyfive(5));
console.log(multiplybyfive.power);
console.log(multiplybyfive.prototype);


function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++

}

createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai",25)
const tea = new createuser("tea",250)

chai.printMe()


// let myname = 'navin'
// console.log(myname.truelength);

let myheros = ['thor','ironman']

let heropower = {
    thor : 'hammer',
    ironman : 'ironsuit',

    getthorpower : function() {
        console.log(`thor power is ${ihis.thor}`);
        }

    
}

Object.prototype.navin = function(){
    console.log(`navin is here `);
}

// heropower.navin()
Array.prototype.vinit = function(){
    console.log(`this is vinit`);
}
myheros.navin()
myheros.vinit()


//inheritance 

const teacher = {
    makevideo  :true
}


const  support = {
    isavailable : true
}

const  TAsupport ={
    assignment: 'js',
    fulltime:true,
    __proto__: support
}

//modern

Object.setPrototypeOf(support, teacher)