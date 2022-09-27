function sumDigit(number){

let textNumber=number.toString();
let textNumberLength=textNumber.length;
let sum=0;

for(let currentDigit=0;currentDigit<textNumberLength;currentDigit++){

    sum+=Number(textNumber[currentDigit])

}

console.log(sum)

}
sumDigit(245678);
sumDigit(97561)