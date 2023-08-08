function demo(input) {

 let converted=JSON.parse(input);
 for (const key in converted) {
    console.log(`${key}: ${converted[key]}`)
 }

}
