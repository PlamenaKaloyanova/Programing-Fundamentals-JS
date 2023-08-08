function demo(numOne,numTwo,operator){

    function multiply(one,two){
    let multiResult=one*two;
    return multiResult;

    }let multiplyResult=multiply(numOne,numTwo)
     


     function divide(one,two){
      let divideResult=one/two;
      return divideResult;

     }let divideResult=divide(numOne,numTwo);
     
     function add(first,second){

      let sum=first+second;
      return sum;

     }let sumResult=add(numOne,numTwo);
     

     function subtract(one,two){
        let subtrackSum=one-two;
        return subtrackSum;
     }let resultSubtract=subtract(numOne,numTwo);
   
     switch(operator){
        case "multiply":console.log(multiplyResult);break;
        case "divide":console.log(divideResult);break;
        case "add":console.log(sumResult);break;
        case "subtract":  console.log(resultSubtract);break;
    }

}
