  function censor(text,word){
    let textSplit=text.split(" ");
    let counter=0
  for (let index = 0; index < textSplit.length; index++) {
    if(textSplit[index]==word){
      counter++;
    }
    
  }
console.log(counter)
    }
