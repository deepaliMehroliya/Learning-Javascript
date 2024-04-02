var reverseWordsAndSentence = function (sentence) {

    let stringArr = sentence.split(' ');

    for (i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i].split("").reverse().join("");
    }
    return stringArr.reverse().join(' ');
}

console.log(reverseWordsAndSentence("I love my Company"));

var makeFirstAndLastLetterCapital = function (sentence) {
    let words = sentence.split(' ');

    for (i = 0; i < words.length; i++) {

        const word = words[i];
        let modifiedWord = '';

        for (j = 0; j < word.length; j++) {
            if (j === 0 || j === word.length) {
                modifiedWord += word[j].toUpperCase();
            }
            else {
                modifiedWord += word[j];
            }
        }
        words[i] = modifiedWord;
    }
    return words.join(' ');
}

console.log(makeFirstAndLastLetterCapital("I love my company"));