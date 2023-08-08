function demo(arrayOfString,arrayOfString2) {

    let currentDigit
    for(let i=0;i<arrayOfString.length;i++){
        currentDigit=Number(arrayOfString[i])
    }

    let isEqual=false;
    let sum=0;
    let index=0;

    for(let i=0;i<arrayOfString2.length;i++){
        let currentDigit2=Number(arrayOfString2[i])

        if(arrayOfString[i]===arrayOfString2[i]){
     sum+=Number(arrayOfString[i]);
      isEqual=true;
    }else{
     isEqual=false;
     index=i;
     break;
    }

    }
if(isEqual){
    console.log(`Arrays are identical. Sum: ${sum}`)
}else{
    console.log(`Arrays are not identical. Found difference at ${index} index`)
}
    
  }
