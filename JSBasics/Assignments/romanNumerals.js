/**
 * @param {string} s
 * @return {number}
 */

let I = 1
let V = 5
let X = 10
let L = 50
let C = 100
let D = 500
let M = 1000
var romanToInt = function(s) {

let num = 0; 
let sum= 0;
let prev = 0;

for(i= s.length-1; i>=0;i--){
    switch(s.charAt(i)){
        case "I": num = 1;break;
        case "V": num = 5; break;
        case "X": num = 10; break;
        case "L": num = 50; break;
        case "C": num = 100; break;
        case "D": num = 500; break;
        case "M": num = 1000; break;
    }

    if(num<prev){
        sum -= num
    }
    else{
        sum += num
    }

    prev = num
}
    console.log(sum)
};

romanToInt("IIIV")