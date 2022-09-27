function specialNumber(n) {


    let currentNum = 0;


    for (let i = 1; i <= n; i++) {

        currentNum = i;

        if (currentNum >= 10) {
            let currentText = currentNum.toString();

            let sum = 0;
            for (let j = 0; j < currentText.length; j++) {
                let curuntDigit = Number(currentText[j])
                sum += curuntDigit;
            }
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${currentNum} -> True`)
            } else {
                console.log(`${currentNum} -> False`)
            }


        } else {
            if (currentNum == '5' || currentNum == '7 ' || currentNum == '11') {
                console.log(`${currentNum} -> True`)

            } else {
                console.log(`${currentNum} -> False`)
            }
        }



    }




}
specialNumber(15)
