function demo(input){
let allWords={};

input.forEach(element => {
    let currentElement=element.split(", ");
    if(!allWords.hasOwnProperty(currentElement)){
     allWords[currentElement]=1;
    }else{
        allWords[currentElement]++;
    }
});
let sortedWords=Object.entries(allWords).sort((a,b)=>b[1]-a[1]);
for (const [key,value] of sortedWords) {
    console.log(`${key} -> ${value} times`)
}

}
