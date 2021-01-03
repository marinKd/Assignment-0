function pairSum(nums, target) {
  // Insert code here;
  if(nums.length<=1){
    throw new Error("Array has 1 or less elements");
  }
  for(let i=0;i<nums.length;i++){
    for(let j=i;j<nums.length;j++){
      if(nums[i]+nums[j]==target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
