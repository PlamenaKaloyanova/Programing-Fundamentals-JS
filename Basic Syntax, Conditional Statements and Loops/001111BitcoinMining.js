function bitcoin(input) {


    //Напишете програма на JavaScript,
    // която изчислява общото количество биткойни, 
    //които сте закупили със златото, което сте добили по време на смяната си в мината. 
    //Вашата смяна се състои от определен брой дни, в които копаете количество злато в грамове. 
    //Вашата програма ще получи масив с количеството злато, което сте добивали всеки ден, където
    // първият ден от вашата смяна е първият индекс на масива. Освен това някой крадеше на всеки
    // трети ден от началото на вашата смяна 30% от добитото злато за този ден. Трябва да проверите кой ден имате достатъчно пари, 
    //за да купите първия си биткойн. За различните борси използвайте тези цени:
    //1 Bitcoin	11949.16 lv.
    //1 g of gold	67.51 lv.

    let counterDay = 0;
    let sumGold = 0;
    let bitcoin = 11949.16;
    let priceGold = 67.51;
    let firstDay = 0;
    let totalSumGold = 0;
    let leftMoney=0;
    let finalSum=0;
    let sum=0;
    for (let i = 0; i <= input.length-1; i++) {
        counterDay++;
        sumGold = input[i];
       
        if (counterDay % 3 === 0) {
            totalSumGold = sumGold * 0.70*priceGold;
        }else{
            totalSumGold = sumGold * priceGold;
        }

        sum+=totalSumGold;
        finalSum+=totalSumGold;
    
        if (finalSum >= bitcoin) {
            finalSum= finalSum - bitcoin;
            firstDay = counterDay;
        }
    }

    let boughtBit = (sum/bitcoin);




    console.log(`Bought bitcoins: ${Math.floor(boughtBit)}`);
    if (firstDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }

    console.log(`Left money: ${finalSum.toFixed(2)} lv.`)

}
bitcoin([100, 200, 300])
bitcoin([50, 100])
bitcoin([3124.15, 504.212, 2511.124])