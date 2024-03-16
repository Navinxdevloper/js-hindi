//for of

// // const arr = [1,2,3,4,5]

// // for (const num of arr) {
// //     console.log(num);
// // }

// // const greeting = "hello world"

// // for (const greet of greeting) {
// //     console.log(greet);
// // }

// //Maps

// const map = new Map() //is for unique value it is not itrable matlab change nhi kar sakte

// map.set("in","india")

// map.set("usa","america")

// map.set("ussr","russia")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

const myobject ={
    "game1" : "nfs",
    "game2" : "og"
}

for (const [key,value] of myobject) {
    console.log(key, "::", value);
}

//js default behaviour prototyple behaviour