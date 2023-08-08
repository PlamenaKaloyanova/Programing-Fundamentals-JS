function demo(text) {
let result=text[0];
let lowerCaseText=text.toLowerCase()
for (let index = 1; index < text.length; index++) {
  let currentDigit=text[index];
  if(currentDigit==lowerCaseText[index]){
    result+=currentDigit;
  }else{
    result+=(", " + currentDigit)
  }
  
}
console.log(result)
}
