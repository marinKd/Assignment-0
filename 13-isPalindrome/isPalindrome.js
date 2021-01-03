function isPalindrome(word) {
  // Insert code here;
  let split = word.split("");
  let backwards = split.reverse();
  for(let i=0;i<word.length;i++){
    if(word[i]!=backwards[i]){
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
