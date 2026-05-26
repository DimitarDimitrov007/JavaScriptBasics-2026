function playStore(travelPrice,puzzels,dolls,bears,minions,trucks){
    let totalPrice = puzzels * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    let totalToys = puzzels + dolls + bears + minions + trucks;

    if(totalToys >= 50){
        totalPrice = totalPrice * 0.75;

    }

    let rent = totalPrice * 0.1;
    let moneyLeft = totalPrice - rent;

    if(moneyLeft >= travelPrice){
        console.log(`Yes! ${(moneyLeft-travelPrice).toFixed(2)} lv left.`);

    }else{
        console.log(`Not enough money! ${(travelPrice - moneyLeft).toFixed(2)} lv needed.`);
    }

}
playStore(40.8,20,25,30,50,10);