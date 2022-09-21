function division (number){

let maxNum=0;

if(number%2===0){
    maxNum=2
}
if(number%3===0){
    maxNum=3
}
if(number%6===0){
    maxNum=6
}
if(number%7===0){
    maxNum=7
}
if(number%10===0){
    maxNum=10
}
if(number % 2===0 && number%3===0 && number%6===0){
    maxNum=6;
}
if(number%10===0 && number%2===0){
    maxNum=10;
}

if(maxNum>0){
    console.log(`The number is divisible by ${maxNum}`)
}else{
    console.log('Not divisible')
}


}
division(30);
division(15);
division(12);
division(1643);

