function bitcoin(input) {

    let goldAday = 0;
    let firstDay = 0;
    let sumGold = 0;
    let counterDay = 0;
    let boughtBit = 0;
    let leftMoney=0;


    let bitcoin = 11949.16;
    let PriceGold = 67.51;
    let firstSum = 0;
    let allGold = 0

    for (let i = 0; i <= input.length - 1; i++) {
        goldAday = Number(input[i]);
        counterDay++;



        if (counterDay % 3 === 0) {
            sumGold += (goldAday * PriceGold) * 0.7;
            allGold += goldAday * 0.7;


        } else {
            sumGold += goldAday * PriceGold;
            allGold += goldAday;

        }



        if (sumGold >= bitcoin && (firstSum == 0)) {
            firstSum++;
            sumGold = sumGold-bitcoin;
            firstDay = counterDay;
        } else if (sumGold >= bitcoin && (firstSum == 1)) {

            sumGold=sumGold-bitcoin;

        }

    }

    boughtBit = Math.floor((allGold * PriceGold) / bitcoin);
    leftMoney=(allGold*PriceGold)%bitcoin;


    console.log(`Bought bitcoins: ${Math.floor(boughtBit)}`);
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)

}
bitcoin([100, 200, 300])
bitcoin([50, 100])
bitcoin([3124.15, 504.212, 2511.124])