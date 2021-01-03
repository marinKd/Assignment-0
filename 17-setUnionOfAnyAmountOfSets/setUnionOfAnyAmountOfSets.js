function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let set = new Set();
  for(let i=0;i<arguments.length;i++){
    for(let elem of arguments[i]){
      set.add(elem)
    }
  }
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
