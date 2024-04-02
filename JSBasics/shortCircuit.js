console.log(7 || "Mark");
console.log(0 || "Mark");
console.log("Mark" || 10 );
console.log(true || 0);
console.log( undefined || null)
console.log(undefined || 0 || "" || "Great" || 56 || null);

var person = {
    name: "Mark",
    age: 0
};

console.log(person.age || "unemployed")

var person1 = {
    name: "Mark",
    age: 32
};

console.log(person.job || "unemployed")

console.log(person.name || "unemployed")

console.log(5 &&  "Mark" && null && "Derick");

console.log(person1.age>30 && "Driving allowed");

//&& operator looks till for false till the end . If false found it will print the value that caused false or else it will print the last value
// || operator looks for true value. The moment it finds true shortcircuit happens and true value is printed. If both are false the last value is printed