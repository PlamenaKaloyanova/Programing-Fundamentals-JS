function demo(input) {
let townInfo={};

for (const line of input) {
    let currentLine=line.split(" | ");
    townInfo.town=currentLine.shift();;
    townInfo.latitude=Number(currentLine.shift()).toFixed(2);
    townInfo.longitude=Number(currentLine.shift()).toFixed(2);
    console.log(townInfo)
}
}
