var calculateFactorial = function (n) {
    let factorial = 1;
    if (n == 0) {
        return 1;
    }
    else {
        for (i = 0; i < n; i++) {
            factorial = factorial * (n - i)
        }
    }
    return factorial;
}

function factorialRecursive(n) {
    if (n === 0) {
        return 1; // Base case: 0! is defined as 1
    } else {
        return n * factorialRecursive(n - 1); // Recursive case
    }
}

console.log(calculateFactorial(10))
console.log(factorialRecursive(10))

/*We mostly prefer recursion when there is no concern about time complexity and the size of code is small. 
We prefer iteration when we have to manage the time complexity and the code size is large. It has high time complexity. 
The time complexity is lower as compared to recursion.*/