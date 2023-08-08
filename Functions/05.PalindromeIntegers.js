function palidrom(array){

    let arrayLength=array.length;

for(let i=0;i<arrayLength;i++){
    let currentDigit=array[i];
    let stringDigit=currentDigit.toString();

    let firstString="";
    let secondStr="";
    for(let k=0;k<stringDigit.length;k++){
        let currentPosition=stringDigit[k];
        firstString+=currentPosition;

        
    }

    for(let j=stringDigit.length-1;j>=0;j--){
        let backPossition=stringDigit[j]
        secondStr+=backPossition;
    }

    if(firstString===secondStr){
        console.log('true')
    }else{
        console.log('false')
    }
}


}
