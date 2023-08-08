function signCheck(numOne,numTwo,numThree){


    let isPosiitive=true;
   
function signCheckWithTwo(numOne,numTwo){
 if((numOne*numTwo)<0){
    isPosiitive=false;
 }
 return isPosiitive;
}
let result=signCheckWithTwo(numOne,numTwo);
//console.log(result)


let finalResult="";
if(isPosiitive){
    if(numThree<0){
      finalResult='Negative'
    }else{
        finalResult='Positive'
    }
}else{
    if(numThree<0){
        finalResult='Positive'
      }else{
          finalResult='Negative'
      }
}
return finalResult;

}
