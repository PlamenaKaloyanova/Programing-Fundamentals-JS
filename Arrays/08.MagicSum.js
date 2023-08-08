function demo(array,number) {
     for(let i=0;i<array.length;i++){

        for(let k=i+1;k<array.length;k++){
            if((Number(array[i])+Number(array[k])===number)){
                console.log(`${array[i]} ${array[k]}`)
            }
            }
        }
     }
