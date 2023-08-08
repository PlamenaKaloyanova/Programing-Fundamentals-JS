function maxNumber(array){
 let newArray=[];
    
    for(let i=0;i<array.length;i++){
        let isBigger=true;
        let currentNum=Number(array[i]);


        for(let r=i+1;r<array.length;r++){
            if(currentNum<=Number(array[r])){
                isBigger=false;

            }
        }
        if (isBigger){
            newArray.push(currentNum);
        }
    }

console.log(newArray.join(" "));
}
