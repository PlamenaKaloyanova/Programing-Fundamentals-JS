function smallestTwoNumbers(array){

let sortedArray=array.sort((a,b)=>a-b)
//let firstSmallestNum=sortedArray[0];
//let secondSmallestNum=sortedArray[1];
let smallesTwotNums=sortedArray.slice(0,2);

console.log(`${smallesTwotNums.join(" ")}`)
}
