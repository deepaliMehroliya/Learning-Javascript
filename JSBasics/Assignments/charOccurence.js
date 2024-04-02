
function findDuplicateCharacters(inputString) {

    const charCount = new Map()
    const duplicates = new Map()

    for (char of inputString) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1)
        }
        else {
            charCount.set(char, 1)
        }
    }

    for ([char, count] of charCount) {
        if (count > 1) {
            duplicates.set(char, count)
        }
    }
    return duplicates;
}

console.log(findDuplicateCharacters("internationalization"));