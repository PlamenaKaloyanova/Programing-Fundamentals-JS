function rotateArray(array){

let rotationNum=Number(array.pop());
//pop(); - взима последния елемент от масива;
for(let i=0;i<rotationNum;i++){
   let temp=array.pop();
   //unshift() добавя елемент в началото на масива;
  array.unshift(temp)

}
console.log(array.join(" "))

}
