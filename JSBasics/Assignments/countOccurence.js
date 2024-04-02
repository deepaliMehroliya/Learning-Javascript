function countLetterE(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'E' || str[i] === 'e') {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  let inputString = 'Selenium is good for automation';
  let result = countLetterE(inputString);
  console.log(`Number of 'E' in "${inputString}": ${result}`);