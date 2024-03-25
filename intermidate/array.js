// const array = [0,1,2,3,4,5]
// const hero = ["batman","superman"]
//const myarr = new Array(1,2,3,4)
// console.log(array[0]);
// console.log(hero[0]);
// console.log(myarr[0]);

//array method 

// myarr.push(6)  //it used to add values in array parr end me
// myarr.pop() //ye last array ke value ko nikalega


//myarr.unshift(0) //ye shuruwat me ek value add karega 
//myarr.shift()//ye shuruwat wale value ko nikalega
// console.log(myarr.includes(9)); //ye check karega ki  wo value hai ki nhi
// console.log(myarr.indexOf(9)); //ye check kakrege ki  us index pe konsi value hai

// const newarr = myarr.join //ye sare ko join karega par string me
// console.log(myarr);
// console.log(newarr);
const myArr = [0,1,2,3,4,5]
console.log("A ", myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,4)
console.log("C ", myArr);
console.log(myn2);


//slice me original value me koi changes nhi hota exapmle ke liye mere array [1,2,3,4,5] or me agar slice use karke (1,3 )nikalu toh output me 2 or 3 aayega
// par
//splice me original array change ho jata hai for example agar mera array [1,2,3,4,5] hai toh or me splice ka use karke (1,3) nikalu toh mera original array [1,4,5] ho jayega or output me (2,3 ) aa jayega 