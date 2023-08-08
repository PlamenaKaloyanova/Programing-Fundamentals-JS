function demo(input){
let personAddress={};

input.forEach(line => {
    let [name,address]=line.split(':');
    if(!personAddress.hasOwnProperty(name)){
        personAddress[name]=address;
    }else{
        personAddress[name]=address;
    }
});
let sortedInfo=Object.entries(personAddress).sort((a,b)=>a[0].localeCompare(b[0]));

for (const [key,value] of sortedInfo) {
    console.log(`${key} -> ${value}`)
}
}
