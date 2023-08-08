function demo(grade){
let result=0;
if(grade<3.50){
    result="Poor"
}else if(grade<4.50){
    result="Good"
}else if(grade<5.50){
    result="Very good"
}else if(grade>=5.50){
    result="Excellent"
}
if(grade<3){
    console.log('Fail (2)')
}else{
 console.log(`${result} (${grade.toFixed(2)})`)   
}

}
