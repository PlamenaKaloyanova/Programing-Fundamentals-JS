function perfectNumber(number){

    let sum=0;
    for(let i=number;i>1;i--){
        let currentNum=i;

        if(number%currentNum==0){
            sum+=number/currentNum;
        }

       
    }
 if(sum===number){
            console.log('We have a perfect number!')
        }else{
            console.log("It's not so perfect.")
        }


}
