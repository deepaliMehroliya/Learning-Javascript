const NOW = 2023;
const INDEPENDENCE = 1947;
const COUNTRY = "India";

const STATEMENT = COUNTRY +" is into " + (NOW- INDEPENDENCE) + "th year of independence.";

console.log(STATEMENT)

//template string
//use of back ticks
const STATEMENTWITHTEMPLATE = `${COUNTRY} is into ${NOW - INDEPENDENCE}th year of independence`;

console.log(STATEMENTWITHTEMPLATE)

let quote = `where there is a will
there is a way`

console.log(quote)

quote = "where there is a will \nthere is a way"

console.log(quote)