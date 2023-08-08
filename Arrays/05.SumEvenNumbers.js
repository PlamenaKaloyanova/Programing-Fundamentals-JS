function demo(arrayOfString) {

    let sumEven = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
        let currentNum = Number(arrayOfString[i]);

        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        }
    }
    console.log(sumEven)
}
