class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var self=this;
    var mid=Math.floor(nums.length/2);
    //check for single element array scenario
    if(nums.length===1 && nums[0]!=target){
      return false;
    }
    //check for target in middle scenario
    if(target === nums[mid]){
      return true;
    }
    else if(target<nums[mid]){
      return self.binarySearch(nums.slice(0, mid), target);
    }
    else if(target>nums[mid]){
      return self.binarySearch(nums.slice(mid), target);
    }
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
