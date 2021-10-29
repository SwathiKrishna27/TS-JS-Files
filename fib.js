
let num1 = 0, num2 = 1, nextnum; //declaring variables 
console.log('Fibonacci Series:');
for (let i = 1; i <= 100; i++) {
    console.log(num1); 
    nextnum = num1 + num2;
    num1 = num2;
    num2 = nextnum;
}