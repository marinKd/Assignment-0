class MySolution {
  countDownSum(num, counter=0){
    // Insert code here;
    var self=this;
    if(num>1){
      counter+=num;
      self.countDownSum(num-1, counter);

    }
      return counter;
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
