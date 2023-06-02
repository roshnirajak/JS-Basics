function calculate(a, b, operation) {
    return operation(a, b);
}
/*
//method 1
//calculate function stored in addition which initializes the operation function
const addition = calculate(3, 4, function(a,b){return (a+b));
console.log(addition);
*/

//method 2
const subtraction=(a,b)=>a-b;
const result= calculate(5, 6, subtraction);
console.log(result);
