function revealWords(words, text) {

  let allWords = words.split(", ");
  let textArray = text.split(" ");


  allWords.forEach(word => {

    textArray.forEach(part => {
      if (part.includes("*") && word.length === part.length) {
        text = text.replace(part, word)
      }

    });
  });
  console.log(text)
}
