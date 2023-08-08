function demo(arrayOfString) {

    let evenSum=0;
    let oddSum=0;

  for(let i=0;i<arrayOfString.length;i++){
    let currentNum=Number(arrayOfString[i])
      if(currentNum%2===0){
        evenSum+=currentNum;
      }else{
        oddSum+=currentNum;
      }
    }

    let finalSum=evenSum-oddSum;
    console.log(finalSum)
  }
