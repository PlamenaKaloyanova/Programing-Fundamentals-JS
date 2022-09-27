function rightPlace(string,char,string2){

    let currentChar="";
    let newString="";
for(let i=0;i<=string.length-1;i++){
    currentChar=string[i];

   
    if(currentChar==="_"){
        currentChar=char;
        newString+=currentChar;
    }else{
        newString+=currentChar;
    }

}
if(newString===string2){
    console.log('Matched');
}else{
    console.log('Not Matched');
}



}
rightPlace('Str_ng', 'I','Strong');
rightPlace('Str_ng', 'i','String');