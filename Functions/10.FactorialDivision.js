function factorielDivision(number,divisionNum){

function factorielOne(num){
  let sum=0;
  let fact=num;

  if(num<0){
    return 1;
  }else{
    while(num>1){
  sum=fact*(num-1);
  num--;
  fact=sum;
  sum=0;
}
return fact;
  }


}
let factorielResultOne=factorielOne(number);
//console.log(factorielResultOne)


function factorielTwo(num){
    let sum=0;
    let fact=num;
  
    if(num<0){
      return 1;
    }else{
      while(num>1){
    sum=fact*(num-1);
    num--;
    fact=sum;
    sum=0;
  }
  return fact;
    }
  
  
  }
  let factorielResulttWO=factorielTwo(divisionNum);
  //console.log(factorielResulttWO)

function divide(factorielResultOne,secondNumber){
    let divideResult=factorielResultOne/factorielResulttWO;
    return divideResult;
}
let finalResult=divide(factorielResultOne,factorielResulttWO);
console.log(finalResult.toFixed(2))




}
