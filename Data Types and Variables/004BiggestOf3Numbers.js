function biggestOfThreeNumbers(firstNum,secondNum,thirdNum){


let maxNum=0;
if(firstNum>=secondNum && firstNum>=thirdNum){
    maxNum=firstNum;
}

if(secondNum>=firstNum && secondNum>=thirdNum){
    maxNum=secondNum;
}

if(thirdNum>=secondNum && thirdNum>=firstNum){
    maxNum=thirdNum;
}


console.log(maxNum)

}
biggestOfThreeNumbers(-2,7,3);
biggestOfThreeNumbers(130,5,99);
biggestOfThreeNumbers(43,43.2,43.1)
biggestOfThreeNumbers(5,-2,7)
