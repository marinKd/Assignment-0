function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let counter=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===true || arr[i]===false || typeof arr[i]=='string'){
      counter++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
