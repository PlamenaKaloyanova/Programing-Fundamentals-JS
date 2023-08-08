function firstAndLastKNumbers(array){

    let kNumber=array.shift();
    
    let firstKelements=array.slice(0,kNumber);
    let lastKelements=array.slice(array.length-kNumber);

    console.log(firstKelements.join(" "));
    console.log(lastKelements.join(" "))


}
