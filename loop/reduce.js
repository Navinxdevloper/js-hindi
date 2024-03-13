const myNum = [2,3,4,5,6]

const initialvalue = 0

const totalNum = myNum.reduce((previous,current) => previous+current,initialvalue )

console.log(totalNum);