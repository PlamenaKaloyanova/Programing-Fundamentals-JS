function demo(input){

    let personInfo={};
    for (const line of input) {
        let [name,phone]=line.split(" ");
        personInfo[name]=phone;
    }

for (const key in personInfo) {
    console.log(`${key} -> ${personInfo[key]}`)
}
}
