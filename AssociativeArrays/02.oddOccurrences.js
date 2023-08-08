function demo(input){
let words=input.toLowerCase().split(" ");
let wordsCount={};

for (const element of words) {
   if(!wordsCount.hasOwnProperty(element)){
wordsCount[element]=1;
   }else{
    wordsCount[element]++;
   }
}
let sortedWords=Object.entries(wordsCount).sort((a,b)=>b[1]-a[1])
let result="";
for (const [key,value] of sortedWords) {
   if((Number(value)) % 2==1){
    result+=`${key} `;
   }
}
console.log(result)
}
