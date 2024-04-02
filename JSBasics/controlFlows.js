// month = "January"

// switch(month){
//     case "January":
//         monthString = 1
//         break;
//     case "Feb": 
//         monthString = 2
//         break;
//     case "March":
//         monthString = 3
//     case "April":
//         monthString = 4
//         break;
//     default:
//         monthString ="Invalid month"
//         break;
// }

// console.log(monthString)

// const movies = ["One piece", 'Demon Slayer', 'Black clover', 'Guardian of glaxy']

// for(i=0; i< movies.length; i++){
//     console.log(`${i+1} - Movie name is ${movies[i]}`)
// }

// for(let movie of movies){
//     console.log(` Movie name for each movies is ${movie}`)
// }

// for(let i=movies.length-1; i>=0; i--){
//     console.log(`${i+1} - Movie name is ${movies[i]}`)
// }


// let serachMe = "peter piper picked a" + "peck of pickled peppers"
// let max = serachMe.length;

// console.log(serachMe)
// console.log(max)

// let numPs = 0;

// for( i=0; i<max; i++){
//     if( serachMe.charAt(i)!="p"){
//         continue;
//     }
//     console.log(i);
//     numPs++;
// }

//console.log("Found "+ numPs + "p's in the string")


let arrayOfInts = [24,56,78,99,100,17,11,90]
let searchFor = 11;
let i;
let foundIt = false;

for( i; i<arrayOfInts.length; i++){
    if(arrayOfInts[i]== searchFor){
        foundIt = true;
        break;
    }
}

if(foundIt){
    console.log(`${i+1} Found ${searchFor} at index ${i+1}`)
} else{
    console.log(`${searchFor} not found in the array`)
}




