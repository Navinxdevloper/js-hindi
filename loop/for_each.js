//const coding = ["js","py","php","html","css","java"] //foreach does not return value

// const value = coding.forEach( (item) => {
// console.log(item);
// return item
// })

// console.log(value);


 const mynum = [1,2,3,4,5,6,7,8,9,10]

 const newnums = mynum.map((num) => num*10).map((num)=>num+1).filter((num) => num>=40)
 console.log(newnums);
// const newNums = mynum.filter((num) => {
//    return num>4  //scope open kiya toh return keyword use karna padega
// })



// const newnum = {}

// mynum.forEach((num) =>{
//     if(num>4) {
//         newnum.push(num)
//     }
// })
// console.log(newnum);

