

function moveZerosToStart(arr) {
    let nonZeroIndex = 0;
    let k = 0;
    let newArray = new(Array)
    let newArray2 = new(Array)
    let combinedArray = new(Array)
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]== 0) {
        newArray[nonZeroIndex] = arr[i];
        nonZeroIndex++;
      }
      else{
        newArray2[k]= arr[i]
        k++;
      }
    }
  
    combinedArray = newArray.concat(newArray2)
    console.log(combinedArray);
  }
  
  let myArray = [4,5,6,-8,0,-6,7,-3,0,9,-5];
  moveZerosToStart(myArray);
  