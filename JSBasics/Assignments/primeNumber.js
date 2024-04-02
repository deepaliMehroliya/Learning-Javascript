

var isPrime = function (number) {
    let result = true;
    //Reduce loop by half
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
            break;
        }
    }
    return result;
}

var findFirstNPrimeNumber = function (n) {
    const primes = []; 
    let num = 2;
    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

console.log(findFirstNPrimeNumber(10))
