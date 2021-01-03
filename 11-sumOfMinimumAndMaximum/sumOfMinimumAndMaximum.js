function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let max;
  let min;
  if(nums[0]>nums[1]){
    max=nums[0];
    min=nums[1];
  }else{
    min=nums[0];
    max=nums[1];
  }
  for(let i=2;i<nums.length;i++){
    if(nums[i]<min){
      min=nums[i];
    }
    if(nums[i]>max){
      max=nums[i];
    }
  }
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
