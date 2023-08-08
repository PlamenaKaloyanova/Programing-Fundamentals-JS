function demo(input){
let words=input.shift().split(" ");
let allWords={};

words.forEach(word => {
    if(!allWords.hasOwnProperty(word)){
allWords[word]=0;
    }
});
input.forEach(word=>{
if(allWords.hasOwnProperty(word)){
    allWords[word]++;
}
});

let sortedWords=Object.entries(allWords).sort((a,b)=>b[1]-a[1]);
for (const [key,value] of sortedWords) {
    console.log(`${key} - ${value}`)
}
}
