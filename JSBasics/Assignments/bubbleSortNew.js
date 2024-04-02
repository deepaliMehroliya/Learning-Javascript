

function bubbleSort(arr) {
    let swapped;
    do{
        swapped= false
    for(let i = 0 ; i< arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] =  [arr[i+1], arr[i]]
                swapped= true
            }
    }
}while(swapped)
}

const arr = [56,78,12, 13, 5, 45, 1, 0 , 99, 0, 5]
bubbleSort(arr)
console.log(arr)