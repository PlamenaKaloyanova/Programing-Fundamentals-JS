function demo(array,number) {
 
for(let i=1;i<=number;i++){
   let currentNum=array.shift();
   array.push(currentNum);
}

console.log(array.join(' '))
}
