function sortNumber(num1,num2,num3){

let maxNum=0;
let second=0;
let last=0;


if(num1>num2 && num1>num3){
    maxNum=num1;
    if(num2>num3){
        second=num2;
        last=num3;
    }else{
        second=num3;
        last=num2;
    }
}else if(num2>num1 && num2>num3){
    maxNum=num2;
    if(num1>num3){
        second=num1;
        last=num3;
    }else{
        second=num3;
        last=num1
    }
}else if(num3>num1 && num3>num2){
    maxNum=num3;
    if(num1>num2){
        second=num1;
        last=num2;
    }else{
        second=num2;
        last=num1;
    }
}

console.log(maxNum);
console.log(second);
console.log(last)



}
sortNumber(3,2,1)
sortNumber(2,1,3);
sortNumber(-2,1,3)
