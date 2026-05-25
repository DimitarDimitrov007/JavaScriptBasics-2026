function foodDelivery(chicken, fish, vegy){
    let moneyForChicken = chicken * 10.35;
    let moneyForFish = fish * 12.4;
    let moneyForVegy = vegy * 8.15;
    let desertMoney = (moneyForChicken + moneyForFish + moneyForVegy) * 0.2;
    let deliveryMoney = 2.5;
    let totalMoney = moneyForChicken + moneyForFish + moneyForVegy + deliveryMoney + desertMoney;
    console.log(totalMoney);

}
foodDelivery(2,4,3);