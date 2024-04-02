function isEvenOrOdd(number) {
    const lastDigit = number.toString().slice(-1);
    if (lastDigit === '0' || lastDigit === '2' || lastDigit === '4' || lastDigit === '6' || lastDigit === '8') {
        return "Even";
    } else {
        return "Odd";
    }
}

function isEvenOrOddWithBitwiseOperation(number) {
    if ((number & 1) === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


const numberToCheck = 19; // Replace with the number you want to check
const result = isEvenOrOdd(numberToCheck);
const result2 = isEvenOrOddWithBitwiseOperation(numberToCheck)
console.log(`${numberToCheck} is ${result}`);
console.log(`With Bitwise Operation : ${numberToCheck} is ${result2}`);