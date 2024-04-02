/**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             if (i!=j && nums[i]+nums[j]==target){
//                 console.log(`[${i},${j}]`);  
//             }

//     }
// }
    
// };

var twoSum = function(nums, target) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
  
      // If the difference is in the hashmap, return the indices.
      if (diff in hashmap) { // or, hashmap[diff] !== undefined
        return [hashmap[diff], i];
      }
  
      // Otherwise, add the current number to the hashmap.
      hashmap[nums[i]] = i;
    }
  
    return [];
  };

  twoSum([4,7,9,10], 17)