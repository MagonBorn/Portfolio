export const formatNumber = number => {
  let numStr = Math.floor(number).toString();
  console.log(typeof numStr);

  for (let i = numStr.length -3; i > 0; i -= 3) {
    // The slice() method of string values extracts a section of the string and returns it as a new string, without modifying the original string. Takes two arguments: index start (included) and indexEnd (excluded).
    numStr = numStr.slice(0,i) + ',' + numStr.slice(i); 
  }
  return numStr;
}