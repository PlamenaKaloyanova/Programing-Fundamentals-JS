function numberModification(number){

    let numberToString=number.toString();
  

   
    let sumNumbers=0;
    let averageSum=0;
    let countNumber=0;
    while(averageSum<5){
    for(let i=0;i<numberToString.length;i++){
        let currentNum=Number(numberToString[i]);
        sumNumbers+=currentNum;
        countNumber++;
    }
    averageSum=sumNumbers/countNumber;
    if(averageSum<5){
        numberToString+='9'
    }
    countNumber=0;
    sumNumbers=0;
    
}
console.log(Number(numberToString))



}
