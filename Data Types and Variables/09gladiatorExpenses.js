function gladiatorExpenses(lostFights, helmetPrice, swordPrice, sheildPrice, armorPrice) {

    let expensesGladiator = 0;
    let sheilBreak = 0;
    for (let i = 1; i <=lostFights; i++) {
        let currentFight=[i];

        if (currentFight % 2 === 0) {
            expensesGladiator += helmetPrice;
        }

       
        if (currentFight % 3 === 0) {
            expensesGladiator += swordPrice;
        }
       
        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            expensesGladiator += sheildPrice;
            sheilBreak++;
            if (sheilBreak % 2 === 0) {
                expensesGladiator += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expensesGladiator.toFixed(2)} aureus`)
}
//gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)