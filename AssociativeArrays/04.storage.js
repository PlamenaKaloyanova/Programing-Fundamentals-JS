function demo(input){
let storage={};

input.forEach(line => {
    let currentLine=line.split(" ");
    let product=currentLine.shift();
    let quantity=Number(currentLine.shift())
    if(!storage.hasOwnProperty(product)){
        storage[product]=quantity;
    }else{
        storage[product]+=Number(quantity)
    }
});
for (const key in storage) {
   console.log(`${key} -> ${storage[key]}`)
}

}
