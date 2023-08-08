function cutAndReverse(input){

    let middle=Math.floor(input.length/2);
    let firstText=input.substring(0,middle);
    let reversedFirst=firstText.split("").reverse().join("");
    let lastText=input.substring(middle);
    let reversedLast=lastText.split("").reverse().join("");
    console.log(reversedFirst);
    console.log(reversedLast)

}
