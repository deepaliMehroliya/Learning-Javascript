function isArmstrongNumber(number) {
    //countdigits to count number of digits
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, numDigits);
    }

    return sum === number;
}

const number = 153; 
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}