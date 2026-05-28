function flowerShop(magnolii,zumbuli,rozi,kaktusi,giftPrice){
    let income = magnolii * 3.25 + zumbuli * 4 + rozi * 3.5 + kaktusi * 8;
    let moneyAfterTax = income * 0.95;

    if(moneyAfterTax >= giftPrice){
        console.log(`She is left with ${Math.floor(moneyAfterTax - giftPrice)} leva.`);
    }else{
        console.log(`She will have to borrow ${Math.ceil(giftPrice - moneyAfterTax)} leva. `);
    }

}
flowerShop(2,3,5,1,50);