function vacation(groupPeople, typeOfGroup, dayOfWeek) {
    let priceForOne = 0;


    if (typeOfGroup === 'Students') {

        if (dayOfWeek === 'Friday') {
            priceForOne=8.45;
        } else if (dayOfWeek === 'Saturday') {
            priceForOne=9.80;
        } else if (dayOfWeek === 'Sunday') {
            priceForOne=10.46;
        }

    } else if (typeOfGroup === 'Business') {
        if (dayOfWeek === 'Friday') {
            priceForOne=10.90;
        } else if (dayOfWeek === 'Saturday') {
            priceForOne=15.60;
        } else if (dayOfWeek === 'Sunday') {
            priceForOne=16;
        }

    } else if (typeOfGroup === 'Regular') {


        if (dayOfWeek === 'Friday') {
            priceForOne=15;
        } else if (dayOfWeek === 'Saturday') {
            priceForOne=20;
        } else if (dayOfWeek === 'Sunday') {
            priceForOne=22.50;
        }


    }

let totalPrice=priceForOne*groupPeople;
if(typeOfGroup==='Students' && groupPeople>=30){
    totalPrice=totalPrice-(totalPrice*0.15)
}
if(typeOfGroup==='Business' && groupPeople>=100){
    totalPrice=totalPrice-(10*priceForOne)
}

if(typeOfGroup==='Regular' && groupPeople>=10 && groupPeople<=20){
    totalPrice=totalPrice*0.95;
}


console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday")