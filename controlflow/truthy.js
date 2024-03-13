//falsy value 

//false, 0, -0, bigint 0n, "", null,undefined,NaN

//truthy value
//"0",'false'," ",[],{},function(){}


//nullish coalescing operator(??)

let val;
val = 5 ?? 10  // isme 5 aayega
val = null?? 10 // isme null nhi lega 10 hoga
val = undefined ?? 15 //isme undefined nhi lega 15 hoga


console.log(val);
