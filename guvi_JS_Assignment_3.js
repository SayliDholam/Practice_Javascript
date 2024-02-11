console.log("Check Equality: ")
var m1 = 54;
var m2 = 43;
console.log(m1 == m2);

/*--------------------------------*/

let a = 1;
console.log(a++); 
console.log(a); 
let b = 1; 
console.log(b--); 
console.log(b);

/*---------------------------------*/

console.log("Factorial of 6");
let n = 6; 
function factorial(n) 
{ 
    let ans = 1; 
      
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
console.log(factorial(n));

/*-----------------------------------------*/

