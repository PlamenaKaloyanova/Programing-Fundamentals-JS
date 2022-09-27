function spiceMustFlow(currentYield){


    let sumSpice=0;

    let yieldDrop=10;
    let workers=26;
    let totalAmout=0;
    let day=0;
    while(currentYield>=100){
        day++;
        sumSpice+=currentYield-workers;
        currentYield-=yieldDrop;
        
    }

    if (sumSpice >= workers) {
        sumSpice -= workers;
    }
    
   
    console.log(day);
    console.log(sumSpice)


}
spiceMustFlow(111);
spiceMustFlow(450)