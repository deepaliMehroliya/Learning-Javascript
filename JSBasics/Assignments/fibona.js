

//0,1,1,2,3,5,8

function findNthTermInFibonnaci(n) {

    fibonacciSeries = [0,1];
    for(i = 2; i<n ; i++){
        fibonacciSeries[i] = fibonacciSeries[i-1] + fibonacciSeries[i-2]

    }
    return fibonacciSeries[n-1];

}

const n = 10;
const result = findNthTermInFibonnaci(4)
console.log(result)

//500 Internal Server Error
//503 Service unavailable 
//201 Created
//202 Accepted
//400 Bad request
//401 Unauthorized
//402 payment required
//403 Forbidden
//404 Resource not found
//415 Unsupported Media type
//429 Too many request
