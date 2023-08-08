function demo(input){
let carParking={};

input.forEach(line => {
    let currentLine=line.split(", ");
    let command=currentLine.shift();
    let carNumber=currentLine.shift();
    if(command=="IN"){
        carParking[carNumber]=0;
    }else{
        delete carParking[carNumber]
    }
});
let sortedParking=Object.entries(carParking).sort((a,b)=>a[0].localeCompare(b[0]))
for (const [key,value] of sortedParking) {
    console.log(`${key}`)
}
}
