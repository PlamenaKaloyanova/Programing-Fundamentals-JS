function revealWords(text) {

  let textArray=text.split(" ");
  textArray.forEach(element => {
    let word1;
    if(element.startsWith("#") && element.length>1){
      let isSpecial=true;
      for (let index = 1; index < element.length; index++) {
        word1=element
        let currentWord=element.toLowerCase();
       if(currentWord[index].charCodeAt()<97 || currentWord[index].charCodeAt()>122){
        isSpecial=false;
       }
        
      }
      if(isSpecial){
        console.log(word1.substring(1))
      }
    }
  });

}
