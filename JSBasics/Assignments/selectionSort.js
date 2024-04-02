var selectionSort = function (arr) {

    let n = arr.length

    for (i = 0; i < n - 1; i++) {
        min_index = i
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp
    }
    return arr
}

console.log(selectionSort([4,6,1,5,3,2]))