function sumOfOddNumbers(n){

let i=1;
let count=0;
let sum=0;
while(count<n){
    if(i%2!=0){
        console.log(i);
        count++;
        sum+=i;
    }
    i++;
}
console.log(`Sum: ${sum}`)

}
sumOfOddNumbers(5)