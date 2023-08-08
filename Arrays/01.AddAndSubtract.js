function demo(array) {
 
//•	If the number is even - add to its value its index position
//•	If the number is odd - subtract to its value its index position
let sumFirst=0
let sumSecond=0
for(let i=0;i<array.length;i++){
    sumFirst+=array[i]
    if(array[i]%2===0){
        array[i]=array[i]+i;
        sumSecond+=array[i]
    }else{
        array[i]=array[i]-i;
        sumSecond+=array[i]
    }
}
console.log(array);
console.log(sumFirst);
console.log(sumSecond)

}
