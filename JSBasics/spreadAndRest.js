const cars = ["Saab", "Volvo", "BMW"];
const fruits = ["Apple", "Orange", "Kiwi", "Pineapple"]

let merge = [...cars, ...fruits]

console.log(merge)


// ... on thr right hand side of the equation is spread operator
//while left hand side it will be rest parameter
//...args = ...y) LHS=RHS
function sum(...args){
    let sum =0;
    console.log(typeof(args))
    for( let arg of args) sum+= arg;
    return sum;
}

console.log(sum(3,6,9,10,12,13,15,16,16,18,1,8,10));

const fruits1 = ["Apple", "Orange", "Kiwi", "Pineapple","Grapes", "Banana"]
let [banana, orange, ...others] = fruits1;
console.log(banana,orange , others )