//In place substitution or sorting
var removeElement = function(nums, val) {
    let count = 0
    for(i=0;i<nums.length;i++){
        if(nums[i]!=val){
            let temp = nums[count]
            nums[count] = nums[i]
            nums[i] = temp
            count++
        }
    }
    return count
};

console.log(removeElement([1,4,6,7,2,3,3,9], 3))