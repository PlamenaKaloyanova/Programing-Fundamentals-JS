function carWash(arrayOfStrings){

    let carClean=0;
for(let i=0;i<arrayOfStrings.length;i++){
    let command=arrayOfStrings[i]
    
    if(command==='soap'){
        carClean+=10;
    }else if(command==='vacuum cleaner'){
        carClean=carClean+(carClean*0.25)
    }else if(command==='water'){
        carClean=carClean+(carClean*0.20)
    }else if(command==='mud'){
        carClean=carClean-(carClean*0.10)
    }

    
}
console.log(`The car is ${carClean.toFixed(2)}% clean.`)


}
