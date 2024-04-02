// const arr = [5, 6, 1, 3, 10, 0];
// const bubbleSort = arr => {
//     const len = arr.length
//     const swap = (arr, left, right) => (
//         [arr[left], arr[right]] = [arr[right], arr[left]])

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len-i-1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                swap(arr,j, j+1)
//             }
//         }
//     }
//     return arr;
// }

// console.log(arr)
// console.log(bubbleSort(arr))


function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
    for(let i =0; i< arr.length -1; i++){
        if(arr[i]<arr[i+1]){
            [arr[i]. arr[i+1]] = [arr[i+1], arr[i]]
            swapped = true;
        }
    }
}while(swapped)

}

const arr = [24,56,12,10,9]
bubbleSort(arr)
console.log(arr)