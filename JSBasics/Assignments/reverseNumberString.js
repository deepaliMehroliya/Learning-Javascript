function reverseNumber(number) {
    let numString = number.toString();
    let reversedString = numString.split('').reverse().join('');
    let reversedNumber = parseFloat(reversedString);
    return reversedNumber;
  }
  
  let originalNumber = 12345;
  let reversed = reverseNumber(originalNumber);
  console.log(`Original Number: ${originalNumber}`);
  console.log(`Reversed Number: ${reversed}`);
