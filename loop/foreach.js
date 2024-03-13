const coding  = ["js","python","sql","html"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item) =>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

const mycoding = [
    {
        language:"javascript",
        file:".js"
    },
    {
        language:"python",
        file:".py"
    },
    {
        language:"mysql",
        file:".sql"
    },
]

mycoding.forEach((item) => {
console.log(item.language);
})