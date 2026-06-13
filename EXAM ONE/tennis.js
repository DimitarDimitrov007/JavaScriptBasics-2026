function tennis(rocketPrice, rockets, shoes) {

    let totalPrice = 0;
    let rocketsPrice = rocketPrice * rockets;
    let pairOfShoes = rocketPrice / 6;
    let priceForAllShoes = shoes * pairOfShoes;
    let otherStuffPrice = (rocketsPrice + priceForAllShoes) / 5;

    totalPrice = rocketsPrice + priceForAllShoes + otherStuffPrice;
    let hisShare = totalPrice / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(hisShare)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice - hisShare)}`);


}
tennis(850,
    4,
    2);