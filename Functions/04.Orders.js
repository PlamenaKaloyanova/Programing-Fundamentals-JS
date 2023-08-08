function demo(type,quantity){
    let price=0;
    let finalSum=0;
    if(type==="water"){
        price=1;
    }else if(type==="coffee"){
        price=1.50
    }else if(type==="coke"){
        price=1.40;
    }else if(type==="snacks"){
        price=2;
    }
 
 finalSum=(price*quantity).toFixed(2);
 return finalSum;


}
