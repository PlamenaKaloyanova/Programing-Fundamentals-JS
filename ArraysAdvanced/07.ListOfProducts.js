function listOfProduct(array){

let sortedFruit=array.sort()
for(let i=0;i<sortedFruit.length;i++){
    console.log(`${i+1}.${sortedFruit[i]}`)
}

}
