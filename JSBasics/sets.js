const ordersSet = new Set([
  "XYZ",

  "ABC",

  "ABC",

  "PQR",

  "ABC",

  "XYZ",

  "DFE",

  "GWS",
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("DEF"));
ordersSet.add("Mark");
ordersSet.add("Mark");
ordersSet.add("Mark");
console.log(ordersSet);
ordersSet.delete("Mark");
console.log(ordersSet);

for(const orderSet of ordersSet ){
    console.log(orderSet);
}

// used to store unique items
// Is not an ordered 
//we are not sure at what index the value might be stored so we cannot check valued based on index