function negativeOrPositiveNumbers(array) {

    let newArray=[];
    
    for(let i=0;i<array.length;i++){
        let currentNumber=Number(array[i]);
        if(currentNumber<0){
            newArray.unshift(currentNumber)
        }else{
            newArray.push(currentNumber)
        }
    }
    
console.log(newArray.join("\n"))
   

}
