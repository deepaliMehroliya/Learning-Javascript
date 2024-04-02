const nameAge= new Map();

nameAge.set("Mark", 26).set("Steve", 67).set("Bill", 65);

console.log(nameAge)
console.log(nameAge.size)
console.log(nameAge.has("Bill"))
nameAge.delete("Mark")
console.log(nameAge)

const arr = [...nameAge]
console.log(arr)

for ( const [key, value] of nameAge){
    console.log(`salary for ${key} is ${value}`);
}

for( const value of nameAge.values()){
    console.log("Value "+ value)
}
const newNameAge= new Map(nameAge.entries());
console.log(newNameAge);

//arrow functions doesnt have keyword this and arguments
//arrow function gets scope of its parent
const car = { type: "Fiat", model: "500", color: "white" };
for ( let key of Object.keys(car)){
    console.log(key);
}

for( let entry of Object.entries(car)){
    console.log(entry);
}