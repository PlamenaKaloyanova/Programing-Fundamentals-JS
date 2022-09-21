function login(input){


    let index=0;
    let username=input[index];
    index++;

    let password='';
  
    for(let i=username.length-1;i>=0;i--){
        password+=username[i];
    }

    let counter=0;
    for(let j=index;j<input.length;j++){
    if(input[j]!==password){
        
        counter++;
        if(counter===4){
            console.log(`User ${username} blocked!`);
            return;
        }else{
            console.log("Incorrect password. Try again.");
        }
    }else{
        console.log(`User ${username} logged in.`)
    }
}

}
login(['sunny','rainy','cloudy','sunny','not sunny']);
///------------------------
//login(['momo','omom'])
