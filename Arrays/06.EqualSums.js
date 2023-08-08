function demo(array) {

    

    let isEqual = false;
    let index=0;
    for (let i = 0; i < array.length; i++) {
        let firstElement = array[i]
        let leftSum = 0;
        for (let left = 0; left < i; left++) {
            let leftElement = array[left];
            leftSum += Number(leftElement);
        }
        let rightSum = 0;
        for (let right = i + 1; right < array.length; right++) {
            let rightElement = array[right];
            rightSum += Number(rightElement)
        }

        if (leftSum === rightSum && array.length>1) {
            isEqual = true;
            index=i;

        }
    }
if(isEqual){
    console.log(index)
}else if(index===0 && array.length>1 ){
    console.log('no')
}else if(array.length===1){
    console.log('0')
}
}
