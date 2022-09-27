function amazingNumbers(number){

let textNumber=number.toString();
let sum=0;
for(let i=0;i<textNumber.length;i++){

    sum+=Number(textNumber[i]);
}
let sumString=sum.toString()
let amazing="";
for(let j=0;j<sumString.length;j++){
    if(sumString[j]==9){
        amazing='True'
    }else{
        amazing='False'
    }
}
console.log(`${number} Amazing? ${amazing}`)

}
amazingNumbers(1233);
amazingNumbers(999)