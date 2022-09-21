function rounding(num1,precision){

if(precision>15){
    precision=15;
}else{
    precision=precision;
}
let newNum=num1.toFixed(precision);
console.log(parseFloat(newNum))

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);
