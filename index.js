function palindrome(str) {
  let cleanstr = str.replaceAll(",","");
  cleanstr = cleanstr.replaceAll(" ","");
  cleanstr = cleanstr.replaceAll("_","");
  cleanstr = cleanstr.replaceAll("(","");
  cleanstr = cleanstr.replaceAll(":","");
  cleanstr = cleanstr.replaceAll(")","");
  cleanstr = cleanstr.replaceAll("-","");
  cleanstr = cleanstr.replaceAll(".","");
  cleanstr = cleanstr.toLowerCase();
  console.log(cleanstr);
  
  for(let i = 0; i < cleanstr.length/2; i++){
    console.log(i);
    console.log(cleanstr[i]);
    if(cleanstr[i] !== cleanstr[cleanstr.length - i - 1]){
      break;
    }
    if(i >= cleanstr.length/2 - 1){
      return true;
    }
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
