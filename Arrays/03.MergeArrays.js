function demo(arrayOne,arrayTwo) {
 


    for(let i =0;i<arrayOne.length;i++){

        if(i%2===0){
            arrayOne[i]=Number(arrayOne[i])+Number(arrayTwo[i]);
           
        }else{
          arrayOne[i]=arrayOne[i]+arrayTwo[i];
        
        }
    }
    console.log(arrayOne.join(' - '))


}
