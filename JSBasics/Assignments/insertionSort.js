var insertionSort = function (arr) {

    for (i = 1; i < arr.length; ++i) {
        let key = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr;
}

console.log(insertionSort([2, 5, 9, 3, 7, 4, 11, 13]))