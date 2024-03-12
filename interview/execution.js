// let num3 = 1
// let num4 = 2

// const addnum = function(num1,num2){
//     total = num1+num2
//     return total
// }

// let result1 = addnum(3,4)
// let result2 = addnum(num3,num4)


// // step 1 : gloabal execution with the help of this

// //step 2 memory allocation
// num3 = undefined
// num4 = undefined
// addnum = defination
// result1 = undefined
// result2 = undefined

// //execution phase

// num3 = 1
// num4 = 2
// addnum me naya execution phase start hoga  or execution phase khatam honee par delete bhi ho jayega
// result1 = 7

// step 1 : addnum  ka memory allocation hoga result 1 ke saath
// num1 = undefined
// num2 = undefined
// total = undefined

// step 2 : addnum ka execution phase result 1 ke saath
// num1 = 3
// num2 = 4 
// total = num1 + num2 jo ki 7 aayega

// step 1 : addnum  ka memory allocation hoga result 2 ke saath
// num3 = undefined
// num4 = undefined
// total = undefined

// step 2 : addnum ka execution phase result 2 ke saath
// num3 = 1
// num4  = 2 
// total = num3 + num4 jo ki 3 aayega

//callstack

// callstack me lifo use hota hai
// lifo = last in first out

// matlab ki maan le tere paas 3 function hai a,b,c, to sabse pahle a execute hoga
//  phir b hoga or last me c wese hi agar tere ko nikalana hoga to sabse pahle c
//   niklega phir b or last me a or tujhe live run karke dekhna hai toh browser me 
//   source me jakar run kaar sakta phir bhi nhi samajh aa raha toh chai aur code
//    ki video ja kar dekh le pura samajh aa jayega
