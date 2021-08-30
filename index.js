function add(a , b) {
    return(a + b);
} 
result = add(1 , 80);
console.log(add(1 , 80));


function subtract(a , b) {
    return(a - b);
}
result = subtract(60 , 40);
console.log(subtract(60 , 40));


function multiply(a , b) {
    return(a * b);
}
result = multiply(2 , 3.4);
console.log(multiply(2 , 3.4));


function divide(a , b) {
    return(a / b);
}
result = divide(5.0 , 2.5);
console.log(divide(5.0 , 2.5));


let number = 10;
function add5() {
    return(number += 5);
}
function divideBy3() {
    return(number /= 3);
}
console.log(divideBy3());
console.log(add5());
  
number = 10;
console.log(add5());
console.log(divideBy3());


function makeInt() {
    return parseInt('42px' , 10);
}
console.log(makeInt('42px' , 10));


function preserveDecimal() {
    return parseFloat(4.2889 , 10);
}
console.log (preserveDecimal( 4.2889 , 10));