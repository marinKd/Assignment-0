function titleCaseEdit(title) {
  // Insert code here;
   const words = title.split(" ");
   for(let i=0;i<words.length;i++){
     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
   }
   return words.join(" ")
}

// Do not edit this line;
module.exports = titleCaseEdit;
