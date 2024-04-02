function fibonacciWithoutRecursion(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

function fibonacciWithRecursion(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    const fibSeries = fibonacciWithRecursion(n - 1);
    fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);

    return fibSeries;
}

const n = 10; // Change n to the desired number of Fibonacci numbers
const fibSeriesWithRecursion = fibonacciWithRecursion(n);
console.log(`Fibonacci Series with Recursion (First ${n} numbers):`, fibSeriesWithRecursion);
const fibSeriesWithoutRecursion = fibonacciWithoutRecursion(n);
console.log(`Fibonacci Series without Recursion (First ${n} numbers):`, fibSeriesWithoutRecursion);
