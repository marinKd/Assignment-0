function frequencyCounter(word) {
  // Insert code here;
  var obj = {};
  word.split("").forEach(function(e){
    obj[e]=obj[e] || 0;
    obj[e]+=1;
  });
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;
