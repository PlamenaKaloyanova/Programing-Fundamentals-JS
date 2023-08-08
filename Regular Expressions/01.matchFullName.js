function demo(data){

let pattern=/\b[A-Z]{1}[a-z]{1,} [A-Z][a-z]{1,}/g
let match=pattern.exec(data)
let result=[]
while(match !==null){
   result.push(match)
    match=pattern.exec(data);

}
console.log(result.join(" "))
}
