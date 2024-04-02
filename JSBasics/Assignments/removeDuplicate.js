var removeDuplicates = function (nums) {
    let temp = []
    for (i = 0; i < nums.length; i++) {
        if (!temp.includes(nums[i])) {
            temp.push(nums[i])
        }

    }
    return temp;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
