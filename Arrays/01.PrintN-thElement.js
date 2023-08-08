function demo(array){

    let result="";
    let nStep=Number(array[array.length-1]);
for(let i=0;i<array.length-1;i+=nStep){
 result+=array[i] + " ";
}


console.log(result)

}
