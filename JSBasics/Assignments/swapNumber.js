function swapWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

let num1 = 5;
let num2 = 8;

console.log(`Before swapping:${num1}, ${num2}`);

[num1, num2] = swapWithoutTemp(num1, num2);

console.log(`After swapping:${num1}, ${num2}`);

console.log(swapWithoutTemp(4, 9));
//Array swaping [a,b]= [b, a] 