function demo(array){

   let arrayLenght=array.length/2;

   for(let i=0;i<arrayLenght;i++){

    let temp=array[i];
    array[i]=array[array.length-1-i];
    array[array.length-1-i]=temp;

   }
console.log(array.join(" "))
}
