function demo(text) {
let result=text[0];
for (let index = 1; index < text.length; index++) {
  let currentDigit=text[index];
  if(currentDigit!==text[index-1]){
       result+=currentDigit
  }
  
}
console.log(result)
}
