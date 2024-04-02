let bill = 200;
let tip = bill > 50 && bill< 300 ? bill*0.15 : bill*0.20;
console.log(`The bill amount was ${bill}Rs and the tip amount was ${tip}Rs and total amount was ${bill + tip}Rs.`)