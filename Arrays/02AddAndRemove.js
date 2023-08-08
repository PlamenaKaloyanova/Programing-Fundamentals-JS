function demo(array){
let command=1;
let index=1;
let newArray=[];
for(let i=0;i<array.length;i++){
    if(array[i]==='add'){
        newArray.push(index);
        index++;
    }else{
        
        newArray.pop()
        index++;
    }
}
if(newArray.length===0){
    console.log('Empty');
}else{
    console.log(newArray.join(' '))
}
}
