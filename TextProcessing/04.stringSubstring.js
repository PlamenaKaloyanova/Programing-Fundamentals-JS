function demo(word,text) {

  let textArray=text.split(" ")
  
for (const currentWord of textArray) {
  let searchingWord=currentWord.toLowerCase()
  if(searchingWord===word.toLowerCase()){
    return console.log(word);
  }
}
  
   console.log(`${word} not found!`) 
}
