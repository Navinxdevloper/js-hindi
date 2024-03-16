const changePi = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(changePi);

const chai = {
    name : 'ginger chai',
    price : 25
}

const changeChai = Object.getOwnPropertyDescriptor(chai,'name')

console.log(changeChai);

// Object.defineProperty(chai,'name',{
//     writable: false,
//     enumerable: false,
//     configurable: false
// })


// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key},${value}`);
}